import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './shared/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.styl'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeservice: EmployeeService) { }

  ngOnInit() {
  }

}
