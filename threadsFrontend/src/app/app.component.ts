import { Component } from '@angular/core';
import { PreviousUrlService } from './services/previous-url/previous-url.service';
import { Title } from '@angular/platform-browser';
import { LayoutService } from './services/layout/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phone = false
  constructor(private previousUrl: PreviousUrlService, 
              private title: Title,
              private layout: LayoutService
              ){
    previousUrl.begin()
    layout.begin()
    this.phone = layout.getPhoneState()
    title.setTitle("Spore")
  }
}
