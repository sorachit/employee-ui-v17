import { Routes } from '@angular/router';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeSaveComponent } from './employee-save/employee-save.component';

export const routes: Routes = [
    { 'path': '', component: EmployeeSearchComponent },
    { 'path': 'save', component: EmployeeSaveComponent }
];
