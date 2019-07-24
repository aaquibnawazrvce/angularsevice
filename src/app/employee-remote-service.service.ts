import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRemoteServiceService {

  private http: HttpClient;

  private employeeUrl = './assets/data/employee.json';
  constructor(httpTemp: HttpClient) {
    this.http = httpTemp;
  }

  getWorkerDetails(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrl);
  }

}
