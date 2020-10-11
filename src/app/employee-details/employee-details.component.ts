import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Employee} from '../models/employee';
import {Observable} from 'rxjs';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getEmployeeById(this.id);
  }

  getEmployeeById(id: number): void {
    this.employeeService.getEmployeeById(id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

}
