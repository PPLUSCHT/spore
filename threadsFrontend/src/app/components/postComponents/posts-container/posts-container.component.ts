import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReceivedPost } from 'src/app/interfaces/recievedObjects/ReceivedPost';
import { PostDataStorageService } from 'src/app/services/post-data-storage/post-data-storage.service';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.css']
})
export class PostsContainerComponent implements OnInit{
  
  public postData!:ReceivedPost

  constructor(private postDataStorage:PostDataStorageService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe({
      next:(url) => this.setData(url[url.length - 1].toString())
    })
  }

  private setData(idString: string) {
    const id = parseInt(idString)
    this.postDataStorage.getData(id).subscribe({
      next: (post) => this.postData = post
    })
  }
}
