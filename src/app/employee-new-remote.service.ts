import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeIF } from './models/employees';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeNewRemoteService {

  private http: HttpClient;
  private _url = 'http://localhost:9085/employee';

  constructor(httpTemp: HttpClient) {
    this.http = httpTemp;
  }

  getEmployees(): Observable<EmployeeIF[]> {
    return this.http.get<EmployeeIF[]>(this._url);
  }

  saveEmployee(emp: EmployeeIF): Observable<EmployeeIF[]> {
      return this.http.post<EmployeeIF[]>(this._url, emp);
  }

  deleteEmployee(empId: number) {
    return this.http.delete(this._url + '/' + empId);
  }


}
