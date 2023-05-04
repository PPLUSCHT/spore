import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ReceivedPost } from 'src/app/interfaces/recievedObjects/ReceivedPost';
import { PostDataService } from 'src/app/services/post/post-data-service.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['../../../homepageComponents/post-card-container/post-card-container.component.css', './search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  posts = new BehaviorSubject<Array<ReceivedPost>>([])
  postsExist = false
  page = 0
  outOfPosts = false
  loading = false

  query!:string

  constructor(private activatedRoute: ActivatedRoute, private postService: PostDataService) { 
    activatedRoute.queryParamMap
        .subscribe((paramMap) => {
          let queryStr = paramMap.get("query")
          if(!queryStr){
            this.query = ""
          }
          else{
            this.query = queryStr
          }

          let pageStr = paramMap.get("pageNumber")
          if(!pageStr || !parseInt(pageStr)){
            this.page = 0
          }
          else{
            this.page = parseInt(pageStr)
          }
        })
  }

  ngOnInit(): void {
    this.posts.subscribe(
      (p) => {this.postsExist = p.length > 0}
    )
    this.posts.next([])
    this.page = 0
    this.loadPage(0)
  }

  public loadPage(page:number): void{
    this.postService.search(this.query, page)
        .subscribe((p) => this.updatePosts(p))
  }

  public updatePosts(newPosts: Array<ReceivedPost>) : void{
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
    this.page += 1
    this.loadPage(this.page)
  }

}
