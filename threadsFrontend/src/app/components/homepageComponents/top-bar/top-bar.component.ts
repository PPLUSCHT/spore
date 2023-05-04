import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Timeframe } from 'src/app/enums/Timeframe';
import { AuthorizationService } from 'src/app/services/auth/authorization.service';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent implements OnChanges{

  @Input() currentTimeframe!: Timeframe
  @Output() currentTimeframeChange = new EventEmitter<Timeframe>()

  @Input() loggedIn!: boolean
  @Output() loggedInChange = new EventEmitter<boolean>()

  loggedInText!:string

  constructor(private router: Router, private auth: AuthorizationService){
    this.updateLoginText()
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes["loggedIn"]){
      this.updateLoginText()
    }
  }

  private updateLoginText(){
    if(this.loggedIn == true){
      this.loggedInText = "Log out"
    }
    else{
      this.loggedInText = "Login"
    }
  }
  
  public updateTimeframe(val: Timeframe){
    this.currentTimeframe = val
    this.currentTimeframeChange.emit(this.currentTimeframe)
  }

  private routeToNewPost(){
    this.router.navigateByUrl(`Posts/Draft`)
  }

  private routeToLogin(){
    this.router.navigateByUrl(`Login`)
  }

  public loginButton(){
    if(this.loggedIn == true){
      this.auth.logout()
      this.loggedIn = false
      this.updateLoginText()
      this.loggedInChange.emit(this.loggedIn)
    }
    else{
      this.routeToLogin()
    }
  }

  public newPostButton(){
    if(this.loggedIn == true){
      this.routeToNewPost()
    }
    else{
      alert("You must be logged in to make a new post")
      this.routeToLogin()
    }
  }

  public newProfileButton(){
    this.router.navigateByUrl(`Signup`)
  }

}
