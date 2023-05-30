import { Component, EventEmitter, 
  Input, OnInit, Output } from '@angular/core';

import { FormControl, FormsModule } from '@angular/forms';
import { LayoutService } from 'src/app/services/layout/layout.service';

@Component({
  selector: 'app-abstract-text-box',
  templateUrl: './abstract-text-box.component.html',
  styleUrls: ['./abstract-text-box.component.css']
})
export class AbstractTextBoxComponent implements OnInit{

  @Input() text!: string;

  @Output() deleteDialog = new EventEmitter<boolean>();
  formText:FormControl = new FormControl(this.text)
  loading: boolean = false;
  phone: boolean = false;

  constructor(private layout: LayoutService){
  }

  ngOnInit(): void {
    this.formText.setValue(this.text)
    this.phone = this.layout.getPhoneState()
  }
  
  onSubmit(): void {
    this.loading = true
  }

  updateLoading(): void {
    this.loading = false
  }

  public cancelButton(): void{
    this.deleteDialog.emit()
  }

}
