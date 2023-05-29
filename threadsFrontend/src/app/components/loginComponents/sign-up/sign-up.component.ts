import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, debounceTime, map, of, switchMap } from 'rxjs';
import { UserRequest } from 'src/app/interfaces/requestObjects/UserRequest';
import { AuthorizationService } from 'src/app/services/auth/authorization.service';
import { PreviousUrlService } from 'src/app/services/previous-url/previous-url.service';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  
  newUserForm = this.formBuilder.group({
    username: new FormControl('Username'),
    password: new FormControl('Password')
  })

  usernameClicked = false
  passwordClicked = false

  previousURL:string = ""

  usernameUnique = new BehaviorSubject<boolean>(false)

  usernameLongEnough:boolean = false
  usernameShortEnough:boolean = true
  usernameUniqueBool:boolean = false

  passwordLongEnough:boolean = false
  passwordShortEnough:boolean = true
  passwordContainsNumber: boolean = false
  passwordContainsCapital: boolean = false
  passwordContainsLowercase: boolean = false
  passwordContainsSpecial: boolean = false

  usernameValid: boolean = false
  passwordValid: boolean = false

  constructor(private formBuilder: FormBuilder, 
              private userService: UserService,
              private auth: AuthorizationService,
              private router: Router,
              private previousURLService: PreviousUrlService) 
              { }
  
  ngOnInit(): void {
    this.previousURLService.getPrevious().subscribe((url) => this.previousURL = url)
    this.usernameUnique.subscribe((bool) => this.usernameUniqueBool = bool)
    
    this.newUserForm.get("password")?.valueChanges.pipe(map((password) => this.passwordValidator(password)))
                    .subscribe(() => this.passwordCheck())
    
    this.newUserForm.get("username")?.valueChanges.pipe(
        debounceTime(500),
        map((username) => this.usernameValidator(username)),
        switchMap((username) => {return this.uniqueCheck(username)})
    ).subscribe((unique:boolean) => {
      if(unique){
        this.usernameUniqueBool = true
      }
      else{
        this.usernameUniqueBool = false
      }
      this.usernameCheck()
    })

  }

  public onSubmit(): void{

    if(!this.usernameValid){
      alert("Invalid Username")
      return
    }

    if(!this.passwordValid){
      alert("Invalid Password")
      return
    }

    let user:UserRequest={
      userName: this.newUserForm.value.username!,
      password: this.newUserForm.value.password!
    }

    this.userService.createUser(user)
        .subscribe({
           next: () => {this.auth.login(user).subscribe({
              next: () => this.router.navigateByUrl(this.previousURL),
              error: (error) => {
                  alert("User creation successful but login failed")
              }
           }   
           )},
           error: (error) => {
            alert("User creation failed. Use a different username please")
           }
        })
  }

  public usernameValidator(username: string | undefined | null): string | undefined | null{

    if(!username){
      return
    }

    if(username.length > 20){
      this.usernameShortEnough = false
      return username
    }
    
    this.usernameShortEnough = true

    if(username.length < 6){
      this.usernameLongEnough = false
      return username
    }

    this.usernameLongEnough = true
    return username

  }

  public uniqueCheck(username: string | undefined | null): Observable<boolean>{
    if(this.usernameLongEnough && this.usernameShortEnough && username){
      return this.userService.checkUsernameUniqueness(username)
    }
    return of(false)
  }

  public passwordValidator(password: string | undefined | null): string | undefined | null{
    
    let numberRegex:RegExp = /.*[0-9].*/g
    let capitalRegex:RegExp = /.*[A-Z].*/g
    let lowercaseRegex:RegExp = /.*[a-z].*/g
    let specialCharacter:RegExp = /.*[!@#$%^&*_+=;:<>?~].*/g

    if(!password){
      return
    }

    this.passwordLongEnough = password.length >= 8 ? true : false
    this.passwordShortEnough = password.length <= 20 ? true : false
    this.passwordContainsNumber = password.match(numberRegex) ? true : false
    this.passwordContainsSpecial = password.match(specialCharacter) ? true : false
    this.passwordContainsLowercase = password.match(lowercaseRegex) ? true : false
    this.passwordContainsCapital = password.match(capitalRegex) ? true : false

    return password
  }

  private passwordCheck(): void{
    this.passwordValid =  this.passwordLongEnough && this.passwordContainsCapital && this.passwordContainsLowercase && this.passwordContainsNumber
           && this.passwordContainsSpecial && this.passwordShortEnough
  }

  private usernameCheck(): void{
    this.usernameValid =  this.usernameShortEnough && this.usernameLongEnough && this.usernameUniqueBool
  }

  public usernameClick(){
    if (this.usernameClicked === false){
      this.newUserForm.get('username')?.setValue('')
      this.usernameClicked = true
    }
  }

  public passwordClick(){
    if (this.passwordClicked === false){
      this.newUserForm.get('password')?.setValue('')
      this.passwordClicked = true
    }
  }

}
