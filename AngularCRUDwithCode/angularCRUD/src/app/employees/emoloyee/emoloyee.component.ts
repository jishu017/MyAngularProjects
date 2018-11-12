import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import {NgForm} from '@angular/forms' ;
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emoloyee',
  templateUrl: './emoloyee.component.html',
  styleUrls: ['./emoloyee.component.styl']
})
export class EmoloyeeComponent implements OnInit {

  constructor( private employeeservice: EmployeeService , private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if ( form != null ) {
      form.reset();
    }
    this.employeeservice.selectedEmployee = {
      EmployeeID: null,
      FirstName: '',
      LastName: '',
      EmpCode: '',
      Position: '',
      Office: ''
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.EmployeeID == null) {
      this.employeeservice.postEmployee(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.employeeservice.getEmployeeList();
          this.toastr.success('New Record Added Succcessfully', 'Employee Register');
        });
    } else {
      this.employeeservice.putEmployee(form.value.EmployeeID, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.employeeservice.getEmployeeList();
        this.toastr.info('Record Updated Successfully!', 'Employee Register');
      });
    }
  }
}
