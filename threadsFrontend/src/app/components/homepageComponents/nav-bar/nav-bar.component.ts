import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, map, switchMap } from 'rxjs';
import { PostTitleDTO } from 'src/app/interfaces/recievedObjects/PostTitleDTO';
import { AuthorizationService } from 'src/app/services/auth/authorization.service';
import { PostDataService } from 'src/app/services/post/post-data-service.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements AfterContentChecked, OnInit {

  loggedIn!:boolean
  results!:Array<PostTitleDTO>
  searchForm = new FormControl("search")
  searchResults = false
  mouseFocus = 0
  searchFocus = false
  clicked = false

  constructor(private auth: AuthorizationService, private router:Router, private postService: PostDataService) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    }
  }

  ngOnInit(): void {
    this.searchForm.valueChanges
        .pipe(
          debounceTime(500),
          switchMap((str) =>
            {
              str = str ? str : ""          
              return this.postService.getSuggested(str)
            }
          )
        )
        .subscribe((postTitles) => this.results = postTitles)
  }

  ngAfterContentChecked(): void {
    this.auth.getLoginSubject().subscribe(
      (status) => {
        if(this.loggedIn == true && status == false){
          this.loggedIn = status
          this.router.navigateByUrl(this.router.url)
        }
        this.loggedIn = status
      }
    )
  }

  public loginButton(): void {  
    this.router.navigateByUrl("Login")
  }

  public logoutButton(): void {
    this.auth.logout()
    this.router.navigateByUrl(this.router.url)
  }

  public homeButton(): void{
    this.router.navigateByUrl("")
  }

  public newPostButton(): void{
    this.router.navigateByUrl("Posts/Draft")
  }

  public signUpButton(): void{
    this.router.navigateByUrl("Signup")
  }

  public getSuggestions(): void{
    let query:string = this.searchForm.value ? this.searchForm.value : ""
    this.postService.getSuggested(query)
        .subscribe((posts) => this.results = posts)
  }

  public selectionChange(): void{
    if(this.clicked == false){
      this.searchForm.setValue("")
      this.clicked = true
    }
    this.searchResults = !this.searchResults
  }

  public routeToPost(postID: number): void{
    this.searchResults = false
    this.mouseFocus = 0
    this.router.navigateByUrl(`Posts/${postID}`)
  }

  public routeToSearch(): void{
    this.searchResults = false
    this.searchFocus = false
    this.router.navigateByUrl(`Search?query=${this.searchForm.value ? this.searchForm.value : ""}&pageNumber=0`)
  }

}
