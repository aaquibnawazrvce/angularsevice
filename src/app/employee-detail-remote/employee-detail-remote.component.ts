import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeRemoteServiceService } from '../employee-remote-service.service';

@Component({
  selector: 'app-employee-detail-remote',
  templateUrl: './employee-detail-remote.component.html',
  styleUrls: ['./employee-detail-remote.component.css']
})
export class EmployeeDetailRemoteComponent implements OnInit {

  errorMsg: string;
  empList: Employee[];
  constructor(empRemoteService: EmployeeRemoteServiceService) {

    empRemoteService.getWorkerDetails().subscribe(
      tempData => this.empList = tempData,
      errorObj => this.errorMsg = errorObj.message
    );
  }

  ngOnInit() {
  }

}
