import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public empList: Employee[];

  constructor(employeeService: EmployeeService) {
    this.empList = employeeService.getWorkerDetails();
  }

  ngOnInit() {
  }

}
