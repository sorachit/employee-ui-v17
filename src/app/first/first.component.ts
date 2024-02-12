import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FormsModule ,InputTextModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent { 
  @Output()
  valueChange = new EventEmitter();

  onKeyup(event : Event) { 
    this.name = (event.target as HTMLInputElement).value;
    this.valueChange.emit(this.name);
  }


  @Input()
  name?: string;

  
  disableInput = false;

  
  
}
