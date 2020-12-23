import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Employee } from '../employee';
import * as _ from 'lodash';
import { AddEmployeeServiceService } from '../services/add-employee-service.service';

@Component({
  selector: 'app-add-employee-component',
  templateUrl: './add-employee-component.component.html',
  styleUrls: ['./add-employee-component.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class AddEmployeeComponentComponent implements OnInit {
  constructor(private _employeeEnrolmentService: AddEmployeeServiceService) {}

  public error: string = '';
  public submitted: string = '';

  skills = [
    'NodeJS',
    'mongoDB',
    'AWS',
    'ExpressJS',
    'React',
    'Angular',
    'TypeScript',
    'Python',
    'Gaming',
    'Serverless',
  ];

  onSubmit(event: NgForm & any) {
    let employeeDetails = JSON.parse(JSON.stringify(event));
    let keys = _.keys(_.pickBy(employeeDetails.skills));
    employeeDetails.skills = keys;
    employeeDetails.salary = parseInt(employeeDetails.salary);
    this._employeeEnrolmentService.addEmployee(employeeDetails).subscribe(
      (result) => {
        console.log(result);
        this.submitted = 'Successfully saved';
      },
      (error) => {
        console.log(error);
        this.error = `Error: ${error.error.message}`;
      },
      () => {
        window.location.reload(); //To empty the form in view
      }
    );
  }

  ngOnInit(): void {}
}
