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

  updateEmployeeImage(image: Buffer, id: number): Observable<any> {
    const fd = new FormData();
    fd.append('upload', image);
    fd.append('employeeID', id);
    return this._http.patch(`${this._url}/employee/photo`, fd);
  }

  deleteEmployeeDocument(id: string): Observable<any> {
    return this._http.delete(`${this._url}/employee/${id}`);
  }

  updateEmployeeDetails(
    field: string,
    value: string,
    id: number
  ): Observable<any> {
    return this._http.patch(`${this._url}/employee/${id}`, {
      field: field,
      value: value,
    });
  }
}

///employee-management/employee/:id
