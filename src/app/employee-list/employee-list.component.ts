import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public empList: Employee[];
  constructor(employeeService: EmployeeService) {
    this.empList = employeeService.getWorkerDetails();
  }

  ngOnInit() {
  }

}
