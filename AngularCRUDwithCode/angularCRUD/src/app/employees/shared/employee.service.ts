import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Employee} from './employee.model';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: Employee;
  employeeList: Employee[];
  constructor(private http: Http) { }

  postEmployee(emp: Employee) {
    const body = JSON.stringify(emp);
    const headerOptions = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
    return this.http.post('http://localhost:1169/api/Employees', body, requestOptions).map(x => x.json());
  }

  putEmployee(id, emp) {
    const body1 = JSON.stringify(emp);
    const headerOptions1 = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions1 = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions1 });
    return this.http.put('http://localhost:1169/api/Employees/' + id,
      body1,
      requestOptions1).map(res => res.json());
  }

  getEmployeeList() {
    this.http.get('http://localhost:1169/api/Employees')
    .map((data: Response) => {
      return data.json() as Employee[];
    }).toPromise().then(x => {
      this.employeeList = x;
    });
  }
  deleteEmployee(id: number) {
    return this.http.delete('http://localhost:1169/api/Employees/' + id).map(res => res.json());
  }
}
