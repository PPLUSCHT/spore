import { Component, EventEmitter, 
  Input, OnInit, Output } from '@angular/core';

import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-abstract-text-box',
  templateUrl: './abstract-text-box.component.html',
  styleUrls: ['./abstract-text-box.component.css']
})
export class AbstractTextBoxComponent implements OnInit{

  @Input() text!: string;

  @Output() deleteDialog = new EventEmitter<boolean>();
  formText:FormControl = new FormControl(this.text)

  ngOnInit(): void {
    this.formText.setValue(this.text)
  }
  
  onSubmit(): void {
  }

  public cancelButton(): void{
    this.deleteDialog.emit()
  }

}
