import { Injectable, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints, LayoutModule} from '@angular/cdk/layout'

@Injectable({
  providedIn: 'root'
})
export class LayoutService{

  phone: boolean = false

  constructor(private breakpointObserver: BreakpointObserver) { }

  begin(): void {
    this.breakpointObserver.observe(Breakpoints.Handset)
        .subscribe(result => {
          if (result.matches){
            this.phone = true
          }
        })
  }

  getPhoneState(): boolean{
    return this.phone
  }

}
