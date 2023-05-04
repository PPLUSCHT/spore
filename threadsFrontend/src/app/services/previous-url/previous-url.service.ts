import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PreviousUrlService{

  private history = new BehaviorSubject<Array<string>>([""])
  private previous = new BehaviorSubject<string>("")

  constructor(private router:Router) { }

  public begin(): void {
    this.router.events
        .pipe(filter(eve => eve instanceof NavigationEnd))
        .subscribe(
          (eve) => {
            let endEvent = eve as NavigationEnd
            let previousURL:string = ""
            if(endEvent.urlAfterRedirects){
              previousURL = endEvent.urlAfterRedirects
            }
            let history = this.history.value
            this.previous.next(history[history.length-1])
            this.history.next([...history, previousURL])
          }
        )
  }

  public getHistory(): BehaviorSubject<Array<string>> {
    return this.history
  }

  public getPrevious(): BehaviorSubject<string>{
    return this.previous
  }

}

