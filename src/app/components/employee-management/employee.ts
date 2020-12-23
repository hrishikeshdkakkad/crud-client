export class Employee {
  employeeId: string;
  name: string;
  dob: string;
  salary: number;
  constructor(name: string, dob: string, salary: number, employeeID: string) {
    this.name = name;
    this.dob = dob;
    this.salary = salary;
    this.employeeId = employeeID;
  }
}
