import { Component, OnInit, ɵinternalCreateApplication} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, RoutesRecognized } from '@angular/router';
import { Observable, filter, map, pairwise, switchMap, take} from 'rxjs';
import { UserRequest } from 'src/app/interfaces/requestObjects/UserRequest';
import { AuthorizationService } from 'src/app/services/auth/authorization.service';
import { PreviousUrlService } from 'src/app/services/previous-url/previous-url.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm = this.formBuilder.group({
    username: new FormControl(''),
    password: new FormControl('')
  })

  private previousURL: string = '';

  constructor(private formBuilder: FormBuilder, 
              private auth: AuthorizationService,
              private router: Router,
              private previousURLService: PreviousUrlService
              ) 
              { }

  ngOnInit(): void {
    this.previousURLService.getPrevious()
        .subscribe((url) => {this.previousURL = url; console.log(url)})
  }

  public onSubmit(): void{
    if(!this.usernameValidator(this.loginForm.value.username)){
      alert("Invalid Username")
      return
    }
    else if(!this.passwordValidator(this.loginForm.value.password)){
      return
    }
    let user:UserRequest={
      userName: this.loginForm.value.username!,
      password: this.loginForm.value.password!
    }
    this.auth.login(user).subscribe(() => this.router.navigateByUrl(this.previousURL))
  }

  private usernameValidator(username:string|undefined|null): boolean{
    return username && username.length <=20 && username.length >= 6 ? true: false
  }

  private passwordValidator(password:string|undefined|null): boolean{
    
    let numberRegex:RegExp = /.*[0-9].*/g
    let capitalRegex:RegExp = /.*[A-Z].*/g
    let lowercaseRegex:RegExp = /.*[a-z].*/g
    let specialCharacter:RegExp = /.*[!@#$%^&*_+=;:<>?~].*/g
    
    if(!(password && password.length >= 8)){
      alert("Password too short")
      return false
    } 

    if(!password.match(numberRegex)){
      console.log(password)
      alert("Password doesn't contain a number")
      return false
    }
    
    if(!password.match(capitalRegex)){
      alert("Password doesn't contain a capital letter")
      return false
    }

    if(!password.match(lowercaseRegex)){
      alert("Password doesn't contain a lowercase lettter")
      return false
    }

    if(!password.match(specialCharacter)){
      alert("Password doesn't contain a special character: !@#$%^&*_+=;:<>?~")
      return false
    }

    return true;
  }

}
