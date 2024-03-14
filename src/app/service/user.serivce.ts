import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class UserService {

    user$ = new BehaviorSubject<Employee>({
        firstName: 'Admin',
        department: { code:1,name:'Mavel'}
      });
}