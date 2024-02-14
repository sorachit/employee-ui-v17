import { Routes } from '@angular/router';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeSaveComponent } from './employee-save/employee-save.component';
import { Mode } from './type/mode';

export const routes: Routes = [
    {'path': '', component: EmployeeSearchComponent },
    {'path': 'save', component: EmployeeSaveComponent, data: { mode: Mode.ADD }},
    {'path': 'save/:id', component: EmployeeSaveComponent, data: { mode: Mode.EDIT }}
];
