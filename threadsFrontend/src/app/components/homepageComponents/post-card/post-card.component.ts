import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ReceivedPost } from 'src/app/interfaces/recievedObjects/ReceivedPost';
import { PostDataStorageService } from 'src/app/services/post-data-storage/post-data-storage.service';
import { frontendRoute } from 'src/app/services/routeCreator';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit{

  constructor(private router: Router, private postDataStorage:PostDataStorageService, private renderer: Renderer2){}
  
  ngOnInit(): void {
    let card = this.renderer.selectRootElement('.post-card', true)
    let contentVotes = this.renderer.nextSibling(card)
    console.log(contentVotes)
  }
  
  @Input() postData!:ReceivedPost

  public routeToPost():void{
    this.postDataStorage.setData(this.postData)
    this.router.navigateByUrl(`Posts/${this.postData.postID}`)
  }



}
