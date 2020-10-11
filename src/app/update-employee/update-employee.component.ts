import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee.service';
import {Employee} from '../models/employee';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  private id: number;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.employeeService.getEmployeeById(this.id).subscribe(
      data => {
        this.employee = data;
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.router.navigate(['employee-list']);
    }, error => console.log(error));
  }

}
