import { Component } from '@angular/core';
import { PreviousUrlService } from './services/previous-url/previous-url.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private previousUrl: PreviousUrlService, private title: Title){
    previousUrl.begin()
    title.setTitle("Spore")
  }
}
