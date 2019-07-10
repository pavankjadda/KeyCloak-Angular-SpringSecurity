import {Component, OnInit} from "@angular/core";
import {NgxSpinnerService} from "ngx-spinner";
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
              private keycloakService:KeycloakService,
              private ngxSpinnerService:NgxSpinnerService) { }

  ngOnInit()
  {
    this.getEmployees();
  }

  private getEmployees()
  {
    this.ngxSpinnerService.show();
    this.employeeService.getEmployees('http://localhost:8081/api/v1/employee/list').subscribe(
      data=>
      {
        this.employees=data;
        this.ngxSpinnerService.hide();
      },
      error1 =>
      {
        this.ngxSpinnerService.hide();
      }
    );
  }

  updateEmployee()
  {
    this.ngxSpinnerService.show();
    this.employeeService.updateEmployee('http://localhost:8081/api/v1/employee/update').subscribe(
      data=>
      {
        this.employees=data;
        this.ngxSpinnerService.hide();
      },
      error1 =>
      {
        this.ngxSpinnerService.hide();
      }
    );
  }

  logout()
  {
    this.keycloakService.logout();
  }
}
