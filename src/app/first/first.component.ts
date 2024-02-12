import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  colors : string[] = ['Red', 'Blue', 'White'];

  @Input()
  name?: string;
  displayName: boolean = true;
  lastName?: string;
  displayLastName: boolean = true;
  @Output()
  valueChange = new EventEmitter();

  onKeyup(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
    this.valueChange.emit(this.name);
  }


  disableInput = false;




}
