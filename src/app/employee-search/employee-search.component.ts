import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { Gender } from '../type/gender';
import { debounceTime, switchMap } from 'rxjs';
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
    ButtonModule,
    ReactiveFormsModule
    ],
  templateUrl: './employee-search.component.html',
  styleUrl: './employee-search.component.scss'
})
export class EmployeeSearchComponent implements OnInit{
  private router = inject(Router);
  constructor(public employeeService: EmployeeService) { }
  
  employeeForm: FormGroup = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl(null),
    lastName: new FormControl(null),
    gender: new FormControl(Gender.MALE),
    department: new FormControl(null),
  })
  departments: Department[] = [
    { "code": 1, "name": "Mavel" },
    { "code": 2, "name": "DC" }
  ];

  ngOnInit(): void {
    this.employeeForm.valueChanges.pipe(
      debounceTime(200),
      switchMap((employeeFormValue) => this.employeeService.getEmployees(employeeFormValue))
    ).subscribe();
  }

  clearEmployee() {
    this.employeeService.clearEmployee();
  }
  gotoSave() {
    this.router.navigate(['/save']);
  }
}
