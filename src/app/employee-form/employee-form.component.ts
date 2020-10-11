import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee';
import {EmployeeService} from '../services/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
              private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.employee);
    this.createEmployee();
    this.router.navigate(['/employee-list']);
  }

  createEmployee(): void {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }
}
