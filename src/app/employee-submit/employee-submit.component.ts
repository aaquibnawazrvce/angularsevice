import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { EmployeeNewRemoteService } from '../employee-new-remote.service';
import { EmployeeIF } from '../models/employees';

@Component({
  selector: 'app-employee-submit',
  templateUrl: './employee-submit.component.html',
  styleUrls: ['./employee-submit.component.css']
})
export class EmployeeSubmitComponent implements OnInit {

  private numericNumberReg = '^-?[0-9]\\d*(\\.\\d{1,2})?$';
  employeeForm: FormGroup;

  errorMsg: string;
  sucessMsg: string;
  empList: EmployeeIF[] = [];

  public get firstName(): AbstractControl {
    return this.employeeForm.get('firstName');
  }

  public get lastName(): AbstractControl {
    return this.employeeForm.get('lastName');
  }

  public get designation(): AbstractControl {
    return this.employeeForm.get('designation');
  }

  public get currentLocation(): AbstractControl {
    return this.employeeForm.get('currentLocation');
  }

  public get age(): AbstractControl {
    return this.employeeForm.get('age');
  }

  public get phoneNumber(): AbstractControl {
    return this.employeeForm.get('phoneNumber');
  }

  public get teleCommuter(): AbstractControl {
    return this.employeeForm.get('teleCommuter');
  }

  public get experience(): AbstractControl {
    return this.employeeForm.get('experience');
  }

  private _empRemoteS: EmployeeNewRemoteService;

  constructor(empRemoteS: EmployeeNewRemoteService) {
    this.buildFormArray();
    this._empRemoteS = empRemoteS;
  }

  ngOnInit() {
    this.getAllEmployees();
  }

  buildFormArray(): void {

    this.employeeForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      designation: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]),
      experience: new FormControl('', [Validators.required, Validators.minLength(1),
      Validators.maxLength(2), Validators.min(0), Validators.max(99), Validators.pattern(this.numericNumberReg)]),
      currentLocation: new FormControl(''),
      teleCommuter: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10),
      Validators.maxLength(12), Validators.pattern(this.numericNumberReg)]),
      age: new FormControl('')
    });
  }

  employeeSave(): void {

    this._empRemoteS.saveEmployee(this.employeeForm.value).subscribe(

      data => {
          this.sucessMsg = 'Data Saved Sucessfully = ' + data;
          this.getAllEmployees();
      },
      error => this.errorMsg = error

    );
  }

  getAllEmployees(): void {
    this._empRemoteS.getEmployees().subscribe(
      data => this.empList = data,
      errorTemp => this.errorMsg = errorTemp
    );
  }

  deleteEmployee(empId: number): void {
    this._empRemoteS.deleteEmployee(empId).subscribe(
      data => {
        this.sucessMsg = 'Data Removed = ' + data;
        this.getAllEmployees();
      },
      errorTemp => this.errorMsg = errorTemp

    );
  }

}
