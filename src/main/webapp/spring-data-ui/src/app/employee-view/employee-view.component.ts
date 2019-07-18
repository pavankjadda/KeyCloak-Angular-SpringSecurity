import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {Employee} from "src/app/employee-list/employee";
import {EmployeeService} from "src/app/employee-list/employee.service";

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit
{
  employee: Employee;
  employeeForm = new FormGroup({
    id: new FormControl({value: '', disabled: true}),
    employeeId: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    salary: new FormControl(''),
    location: new FormControl(''),
  });

  constructor(private employeeService:EmployeeService,
              private activatedRoute:ActivatedRoute,
              private ngxSpinnerService:NgxSpinnerService)
  { }

  ngOnInit()
  {
    this.getEmployeeDetails();
  }


  private getEmployeeDetails()
  {
    let id=this.activatedRoute.snapshot.params.id;
    this.ngxSpinnerService.show();
    this.employeeService.getEmployeeById('http://localhost:8081/api/v1/employee/find/'+id).subscribe(
      data=>
      {
        this.employee=data;
        this.employeeForm.patchValue(
          {
            id: data.id,
            employeeId: data.employeeId,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            salary: data.salary,
            location: data.location,
          });
        this.ngxSpinnerService.hide();
      },
      error1 =>
      {
        this.ngxSpinnerService.hide();
      }
    );
  }
}
