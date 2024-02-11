import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeSearchComponent } from "./employee-search/employee-search.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, EmployeeSearchComponent]
})
export class AppComponent {
  title = 'employee-ui';
}
