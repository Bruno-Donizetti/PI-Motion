import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit{
  @Input({required: true}) placeholder:string = "";
  @Input({required: true}) type: "text" | "number" | "password" = "text";

  valor:string = "";
  maxLength:number = 0;

  
  ngOnInit(){
    if(this.type == "text"){
      this.maxLength = 15;
    }else if (this.type == "password") {
      this.maxLength = 8;
    }else if (this.type == "number") {
      this.maxLength = 11;
    }
  }

  @Output() valorChange = new EventEmitter<string>();

  onValorChange(){
    this.valorChange.emit(this.valor);
  }
}
