import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee';
import {EmployeeService} from '../services/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    }, error => console.log(error));
  }

  updateEmployee(id: number): void{
    this.router.navigate(['update-employee', id]).catch((err) =>
      console.log(err));
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      if (data.deleted) {
        console.log(true);
        this.getEmployees();
      }
    }, error => console.log(error));
  }

  viewEmployee(id: number): void {
    this.router.navigate(['employee-details', id]).catch((err) =>
      console.log(err));
  }
}
