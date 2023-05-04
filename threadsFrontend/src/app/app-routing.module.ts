import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepageComponents/homepage/homepage.component';
import { PostsContainerComponent } from './components/postComponents/posts-container/posts-container.component';
import { LoginComponent } from './components/loginComponents/login/login.component';
import { NewPostComponent } from './components/textInputComponents/new-post/new-post.component';
import { SignUpComponent } from './components/loginComponents/sign-up/sign-up.component';
import { SearchResultsComponent } from './components/searchComponents/search-results/search-results/search-results.component';
import { UnfoundPageComponent } from './components/Unfound/unfound-page/unfound-page.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'Posts/Draft', component: NewPostComponent},
  {path: 'Posts/:id', component: PostsContainerComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Signup', component: SignUpComponent},
  {path: 'Search', component: SearchResultsComponent},
  {path: '**', component: UnfoundPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
