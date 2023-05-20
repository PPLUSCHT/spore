import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Subject, exhaustMap } from 'rxjs';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { Timeframe } from 'src/app/enums/Timeframe';
import { ReceivedPost } from 'src/app/interfaces/recievedObjects/ReceivedPost';
import { HomepageService } from 'src/app/services/homepage/homepage.service';

@Component({
  selector: 'app-post-card-container',
  templateUrl: './post-card-container.component.html',
  styleUrls: ['./post-card-container.component.css']
})
export class PostCardContainerComponent implements OnInit, OnChanges {

  @Input() timeframe! : Timeframe;
  posts = new BehaviorSubject<Array<ReceivedPost>>([])
  loadTrigger = new Subject<void>()
  postsExist = false
  page = 0
  outOfPosts = false
  loading = false

  constructor(private homepageService: HomepageService) { }

  ngOnInit(): void {
    this.posts.subscribe(
      (p) => {this.postsExist = p.length > 0}
    )
    this.loadTrigger.pipe(
      exhaustMap(() => this.homepageService.getTopPeriod(this.page, this.timeframe))
    ).subscribe((p) => this.updatePosts(p))
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.posts.next([])
      this.page = 0
      this.loadPage(0)
  }

  public loadPage(page:number): void {

    this.loading = true
    this.outOfPosts = false
    this.loadTrigger.next()
  }

  public updatePosts(newPosts: Array<ReceivedPost>) : void{
    this.page += 1
    if(newPosts.length > 0){
      this.posts.next([...this.posts.value,...newPosts])
      this.loading = false
      this.outOfPosts = false
    }
    else{
      this.loading = false
      this.outOfPosts = true
    }
  }

  public onScroll() : void{
    this.loadPage(this.page)
  }

}
