import { Component, OnInit } from '@angular/core';
import { EmployeeRemoteServiceService } from '../employee-remote-service.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list-remote',
  templateUrl: './employee-list-remote.component.html',
  styleUrls: ['./employee-list-remote.component.css']
})
export class EmployeeListRemoteComponent implements OnInit {

  empList: Employee[];
  errMsgService: string;
  constructor(employeeRemoteService: EmployeeRemoteServiceService) {

    employeeRemoteService.getWorkerDetails().subscribe(
       empListData => this.empList = empListData,
       erorMessage => this.errMsgService = erorMessage.message
    );
  }

  ngOnInit() {
  }

}
