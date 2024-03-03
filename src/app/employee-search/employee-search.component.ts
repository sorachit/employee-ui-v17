import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { Department } from '../model/department';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';
@Component({
  selector: 'app-employee-search',
  standalone: true,
  imports: [CommonModule,
    RouterModule,
    PanelModule,
    FormsModule,
    DropdownModule,
    RadioButtonModule,
    InputTextModule,
    TableModule,
    ButtonModule
    ],
  templateUrl: './employee-search.component.html',
  styleUrl: './employee-search.component.scss'
})
export class EmployeeSearchComponent {
  private router = inject(Router);
  constructor(public employeeService: EmployeeService) { }
  firstName?: string;
  lastName?: string;
  gender?: string;
  department?: string;
  departments: Department[] = [
    { "code": 1, "name": "Mavel" },
    { "code": 2, "name": "DC" }
  ];
  getEmployee() {
    const employee = {
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
      department:this.department
    } as Employee
    this.employeeService.getEmployees(employee);
  }

  clearEmployee() {
    this.employeeService.clearEmployee();
  }
  gotoSave() {
    this.router.navigate(['/save']);
  }
}
