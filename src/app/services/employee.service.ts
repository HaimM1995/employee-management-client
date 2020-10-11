import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`/employee`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>('/employee', employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`/employee/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<any> {
    return this.httpClient.put(`/employee/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(`/employee/${id}`);
  }

}
