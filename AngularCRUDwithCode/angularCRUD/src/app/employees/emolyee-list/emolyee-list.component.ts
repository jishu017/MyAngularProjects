import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emolyee-list',
  templateUrl: './emolyee-list.component.html',
  styleUrls: ['./emolyee-list.component.styl']
})
export class EmolyeeListComponent implements OnInit {

  constructor( private employeeservice: EmployeeService , private toastr: ToastrService) { }

  ngOnInit() {
    this.employeeservice.getEmployeeList();
  }

  showForEdit(emp: Employee) {
    this.employeeservice.selectedEmployee = Object.assign({}, emp);
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.employeeservice.deleteEmployee(id)
      .subscribe(x => {
        this.employeeservice.getEmployeeList();
        this.toastr.warning('Deleted Successfully', 'Employee Register');
      });
    }
  }

}
