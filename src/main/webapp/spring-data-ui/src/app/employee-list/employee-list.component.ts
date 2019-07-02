import {Component, OnInit} from "@angular/core";
import {KeycloakService} from "../keycloak/keycloak.service";
import {Employee} from "./employee";
import {EmployeeService} from "./employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit
{
  employees: Array<Employee>;

  constructor(private employeeService:EmployeeService,
              private keycloakService:KeycloakService) { }

  ngOnInit()
  {
    this.getEmployees();
  }

  private getEmployees()
  {

    this.employeeService.getEmployees('http://localhost:8081/api/v1/employee/list').subscribe(
      data=> {
        this.employees=data;
      }
    );
  }

  logout()
  {
    this.keycloakService.logout();
  }
}
