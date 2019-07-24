import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getWorkerDetails(): Employee[] {

    const employeeList: Employee[] = [
      { firstName: 'Aaquib', lastName: 'Nawaz', designation: 'Senior Software Engineer II', salary: 1000, location: 'Bangalore India' },
      { firstName: 'Akshath', lastName: 'Maleesh',
      designation: 'Principal Software Engineer', salary: 300000, location: 'Bangalore India' },
      { firstName: 'Dmitry', lastName: 'Shablin', designation: 'Senior Software Engineer I',
      salary: 20000, location: 'Russia' }

    ];

    return employeeList;
  }

}
