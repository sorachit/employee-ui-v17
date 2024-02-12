import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from "./first/first.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FirstComponent]
})
export class AppComponent {
  title = 'employee-ui';
  appvalue = 'appvalue';

  inputChange(name: string) {
    this.appvalue = name;
  }
  


}
