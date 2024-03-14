import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { Observable, filter, from, of } from 'rxjs';
import { UserComponent } from "./user/user.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ToastModule, UserComponent]
})
export class AppComponent {
  title = 'employee-ui';

  constructor() { 
    from([0, 1, 2, 3, 4]).subscribe((v) => console.log(v));
    
    from([5, 6, 7, 8, 9]).subscribe({
      next: (v) => console.log(v % 2 === 0),
      complete: () => console.log('complete'),
      error: (e) => console.log(e)
    });
  }
}
