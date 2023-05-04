import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-character-count',
  templateUrl: './character-count.component.html',
  styleUrls: ['./character-count.component.css']
})
export class CharacterCountComponent implements OnChanges {

  @Input() maxLength!:number

  @Input() content!: string

  @Output() withinLengthEmitter = new EventEmitter<boolean>()

  currentLength:number = 0
  withinLength:boolean = true

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.currentLength = this.content.length
    if(this.content.length <= this.maxLength){
      this.withinLengthEmitter.emit(true)
      this.withinLength = true
    }
    else{
      this.withinLengthEmitter.emit(false)
      this.withinLength = false
    }
  }
}
