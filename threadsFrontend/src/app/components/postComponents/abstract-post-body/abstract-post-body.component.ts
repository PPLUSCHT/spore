import { AfterContentInit, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceivedComment } from 'src/app/interfaces/recievedObjects/ReceivedComment';
import { ReceivedPost } from 'src/app/interfaces/recievedObjects/ReceivedPost';
import { AuthorizationService } from 'src/app/services/auth/authorization.service';
import { LayoutService } from 'src/app/services/layout/layout.service';
import { PostDataStorageService } from 'src/app/services/post-data-storage/post-data-storage.service';
import { PostDataService } from 'src/app/services/post/post-data-service.service';

@Component({
  selector: 'app-abstract-post-body',
  templateUrl: './abstract-post-body.component.html',
  styleUrls: ['./abstract-post-body.component.css']
})

export class AbstractPostBodyComponent implements OnInit, OnDestroy {

  postData!:ReceivedPost
  postID!:number
  phone:boolean = false

  constructor(protected service:PostDataService, 
              protected auth: AuthorizationService, 
              protected postStorage:PostDataStorageService,
              protected router: Router,
              protected layout: LayoutService,
              activeRoute: ActivatedRoute
              ) { 
    activeRoute.url.subscribe((l) => this.postID = parseInt(l[l.length - 1].toString()))
  }
  
  ngOnInit(): void {
    this.postStorage.getData(this.postID)
                .subscribe({
                  next: (post) => this.postData = post
                })
    this.phone = this.layout.getPhoneState()
  }

  ngOnDestroy(): void {
    this.postStorage.clearData()
  }
}
