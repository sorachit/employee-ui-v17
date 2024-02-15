import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Mode } from '../type/mode';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { Department } from '../model/department';
import { Gender } from '../type/gender';
import { customName } from '../validate/custom-name';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-save',
  standalone: true,
  imports: [CommonModule,
    RouterModule,
    PanelModule,
    FormsModule,
    ReactiveFormsModule ,
    DropdownModule,
    RadioButtonModule,
    InputTextModule,
    ButtonModule],
  templateUrl: './employee-save.component.html',
  styleUrl: './employee-save.component.scss'
})
export class EmployeeSaveComponent implements OnInit {
  id?: string;
  mode!: Mode;
  activeRoute = inject(ActivatedRoute);
  employeeService= inject(EmployeeService);
  
  departments: Department[] = [
    { "code": 1, "name": "Mavel" },
    { "code": 2, "name": "DC" }
  ];
  Gender = Gender;

  employeeForm: FormGroup = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl(null, [Validators.required, Validators.minLength(2), customName]),
    lastName: new FormControl(null, Validators.required),
    gender: new FormControl(Gender.MALE),
    department: new FormControl(null, Validators.required),
  })
  
  
  ngOnInit(): void {
    const { mode } = this.activeRoute.snapshot.data;
    this.mode = mode;
    const { id } = this.activeRoute.snapshot.params;
    this.id = id;
    if (id && Mode.EDIT === mode) {
      this.employeeService.getEmployeeById(id).subscribe(response => {
        this.employeeForm.patchValue(response);
      });
    }
  }

  saveEmployee() {
    const employee = this.employeeForm.value as Employee;
    if (this.employeeForm.valid) {
      this.employeeService.addEmployee(employee);
    }
  }

  clearEmployee() {
    // this.employeeService.clearEmployee();
  }

}
