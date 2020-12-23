import { Component, OnInit } from '@angular/core';

import { IEmployee } from '../../../../interfaces/employee.interface';
import { AddEmployeeServiceService } from '../services/add-employee-service.service';

@Component({
  selector: 'app-all-employee-details',
  templateUrl: './all-employee-details.component.html',
  styleUrls: ['./all-employee-details.component.css'],
})
export class AllEmployeeDetailsComponent implements OnInit {
  public employeeInformation!: any;
  public error!: string;
  public name!: any;
  public p: number = 1;

  constructor(private _getAllEmployees: AddEmployeeServiceService) {}

  ngOnInit(): void {
    this._getAllEmployees.getEmployees().subscribe(
      (result: any) => {
        this.employeeInformation = result;
      },
      (error: any) => {
        console.log(error);
        this.error = `Error: ${error.error.message}`;
      }
    );
  }

  Search() {
    if (this.name === '') {
      this.ngOnInit();
    } else {
      this.employeeInformation = this.employeeInformation.filter((res: any) => {
        return res.name
          .toLocaleLowerCase()
          .match(this.name.toLocaleLowerCase());
      });
    }
  }

  key: string = 'salary';
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  onFileSelected(event: any, employeeId: number) {
    const file = event.target.files[0];
    this._getAllEmployees.updateEmployeeImage(file, employeeId).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteDocument(id: string) {
    this._getAllEmployees.deleteEmployeeDocument(id).subscribe(
      (result) => {
        console.log(result);
        window.location.reload(); //Set to reload the page
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onReqToEdit(field: string, value: string, id: number) {
    this._getAllEmployees.updateEmployeeDetails(field, value, id).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
