import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderInterceptService } from './services/headerInteceptor/header-intercept.service';
import { LoggedInCommentComponent } from './components/commentComponents/logged-in-comment/logged-in-comment.component';
import { NotLoggedInCommentComponent } from './components/commentComponents/not-logged-in-comment/not-logged-in-comment.component';
import { CommentTypeDirective} from './directives/comment-type-directive.directive';
import { AbstractCommentComponent } from './components/commentComponents/abstract-comment/abstract-comment.component';
import { UserCommentComponent } from './components/commentComponents/user-comment/user-comment.component';
import { CommentUpvoteComponent } from './components/commentComponents/comment-upvote/comment-upvote.component';
import { ReplyBoxComponent } from './components/textInputComponents/reply-box/reply-box.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { AbstractTextBoxComponent } from './components/textInputComponents/abstract-text-box/abstract-text-box.component';
import { CommentEditComponent } from './components/textInputComponents/comment-edit/comment-edit.component';
import { CommentContainerComponent } from './components/postComponents/comment-container/comment-container.component';
import { LoginComponent } from './components/loginComponents/login/login.component';
import { PostEditComponent } from './components/textInputComponents/post-edit/post-edit.component';
import { AbstractPostBodyComponent } from './components/postComponents/abstract-post-body/abstract-post-body.component';
import { NotLoggedInPostComponent } from './components/postComponents/not-logged-in-post/not-logged-in-post.component';
import { LoggedInPostComponent } from './components/postComponents/logged-in-post/logged-in-post.component';
import { UserPostComponent } from './components/postComponents/user-post/user-post.component';
import { TopBarComponent } from './components/homepageComponents/top-bar/top-bar.component';
import { PostsContainerComponent } from './components/postComponents/posts-container/posts-container.component';
import { PostSelectorDirective } from './directives/post-selector.directive';
import { PostCardComponent } from './components/homepageComponents/post-card/post-card.component';
import { HomepageComponent } from './components/homepageComponents/homepage/homepage.component';
import { NewPostComponent } from './components/textInputComponents/new-post/new-post.component';
import { PostCardContainerComponent } from './components/homepageComponents/post-card-container/post-card-container.component';
import { SignUpComponent } from './components/loginComponents/sign-up/sign-up.component';
import { NavBarComponent } from './components/homepageComponents/nav-bar/nav-bar.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CharacterCountComponent } from './components/textInputComponents/character-count/character-count.component';
import { SearchResultsComponent } from './components/searchComponents/search-results/search-results/search-results.component';
import { UnfoundPageComponent } from './components/Unfound/unfound-page/unfound-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AbstractCommentComponent,
    CommentTypeDirective,
    LoggedInCommentComponent,
    NotLoggedInCommentComponent,
    UserCommentComponent,
    CommentUpvoteComponent,
    ReplyBoxComponent,
    AbstractTextBoxComponent,
    CommentEditComponent,
    CommentContainerComponent,
    LoginComponent,
    PostEditComponent,
    AbstractPostBodyComponent,
    NotLoggedInPostComponent,
    LoggedInPostComponent,
    UserPostComponent,
    TopBarComponent,
    PostSelectorDirective,
    PostCardComponent,
    HomepageComponent,
    NewPostComponent,
    PostsContainerComponent,
    PostCardContainerComponent,
    SignUpComponent,
    NavBarComponent,
    CharacterCountComponent,
    SearchResultsComponent,
    UnfoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    NoopAnimationsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
