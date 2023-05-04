import { AfterContentInit, Component} from '@angular/core';
import { Router } from '@angular/router';
import { Timeframe } from 'src/app/enums/Timeframe';
import { AuthorizationService } from 'src/app/services/auth/authorization.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements AfterContentInit{
  
  homepageTimeframe:Timeframe = Timeframe.Alltime
  loginStatus!:boolean

  constructor(private auth: AuthorizationService, private router:Router){}

  ngAfterContentInit(): void {
    this.loginStatus = this.auth.testLogin()
  }
}
