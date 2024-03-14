import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { Department } from '../model/department';
import { UserService } from '../service/user.serivce';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,DropdownModule,FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  userService = inject(UserService);
  department: Department | undefined;
  departments: Department[] = [
    { "code": 1, "name": "Mavel" },
    { "code": 2, "name": "DC" }
  ];

  changeDepartment(event:DropdownChangeEvent) { 
    const user = this.userService.user$.value;
    user.department = event.value;
    this.userService.user$.next(user);
  }

}
