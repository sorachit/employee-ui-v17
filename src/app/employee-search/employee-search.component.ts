import { Component, inject } from '@angular/core';
import { Department } from '../model/department';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-employee-search',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
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
  constructor(private employeeService: EmployeeService) { }
  private employeeServiceV17 = inject(EmployeeService);
  firstName?: string;
  lastName?: string;
  gender?: string;
  department?: string;
  departments: Department[] = [
    { "code": 1, "name": "Mavel" },
    { "code": 2, "name": "DC" }
  ];
  getEmployee() {
    return this.employeeService.getEmployees();
  }
  clearEmployee() {
    this.employeeService.clearEmployee();
  }
}
