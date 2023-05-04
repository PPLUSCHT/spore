import { Component } from '@angular/core';
import { AbstractPostBodyComponent } from '../abstract-post-body/abstract-post-body.component';

@Component({
  selector: 'app-not-logged-in-post',
  templateUrl: './not-logged-in-post.component.html',
  styleUrls: ['../user-post/user-post.component.css', './not-logged-in-post.component.css']
})
export class NotLoggedInPostComponent extends AbstractPostBodyComponent{


}
