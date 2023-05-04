import { Component } from '@angular/core';
import { AbstractCommentComponent } from '../abstract-comment/abstract-comment.component';

@Component({
  selector: 'app-not-logged-in-comment',
  templateUrl: './not-logged-in-comment.component.html',
  styleUrls: ['../user-comment/user-comment.component.css', './not-logged-in-comment.component.css']
})
export class NotLoggedInCommentComponent extends AbstractCommentComponent {

}
