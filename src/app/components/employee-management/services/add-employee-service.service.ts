import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from 'src/interfaces/employee.interface';
import { Observable } from 'rxjs';
import FormData from 'form-data';

@Injectable({
  providedIn: 'root',
})
export class AddEmployeeServiceService {
  _url = 'http://localhost:3000/api/v1/employee-management';
  constructor(private _http: HttpClient) {}

  addEmployee(employee: IEmployee): Observable<any> {
    return this._http.post<any>(`${this._url}/employee`, employee);
  }

  getEmployees(): Observable<any> {
    return this._http.get<any>(`${this._url}/list`);
  }

  updateEmployeeImage(image: Buffer, id: number) {
    const fd = new FormData();
    fd.append('upload', image);
    fd.append('employeeID', id);
    return this._http.patch(`${this._url}/employee/photo`, fd);
  }
}
