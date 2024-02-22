import { Injectable, inject } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  http = inject(HttpClient);
  employees: Employee[] = [];
  getEmployeeById(id: number) {
    return this.http.get<Employee>(`/api/employee/${id}`);
  }
  getEmployees(employee: Employee): void {
    let httpParams = new HttpParams();
    if (employee.firstName) {
      httpParams = httpParams.append('firstName', employee.firstName);
    }
    if (employee.lastName) {
      httpParams = httpParams.append('lastName', employee.lastName);
    }
    if (employee.gender) {
      httpParams = httpParams.append('gender', employee.gender);
    }
    if (employee.department) {
      httpParams = httpParams.append('department', employee.department.code);
    }
    this.http.get<Employee[]>('/api/employee/search', { params: httpParams })
      .subscribe(response => {
        this.employees = response;
      });
  }

  clearEmployee() {
    this.employees = [];
  }

  addEmployee(employee: Employee) {
    this.http.post<Employee>('/api/employee', employee)
      .subscribe(response => {
        this.employees.push(response);
      });
  }

  editEmployee(employee: Employee) {
    return this.http.put<Employee>(`/api/employee`, employee)
      .subscribe(response => {
        // update ค่าที่อยู่ใน array ด้วย response ที่มาจาก api
        this.employees = this.employees.map((table: Employee) => 
           table.id === response.id ? response : table
        )
      });
  }

  deleteEmployee(id: number) {
    this.http.delete(`/api/employee/${id}`).subscribe(() =>
      this.employees = this.employees.filter((res: Employee) => res.id !== id)
    );
  }
}
