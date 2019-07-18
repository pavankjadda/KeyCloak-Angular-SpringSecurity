import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
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
  editMode: boolean;

  employeeForm = new FormGroup({
    id: new FormControl({value: '', disabled: true}),
    employeeId: new FormControl({value: '', disabled: true}),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    salary: new FormControl(''),
    location: new FormControl(''),
  });

  constructor(private employeeService:EmployeeService,
              private activatedRoute:ActivatedRoute,
              private router:Router,
              private ngxSpinnerService:NgxSpinnerService)
  { }

  ngOnInit()
  {
    this.editMode=false;
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

  editEmployee()
  {
    this.editMode=true;
  }

  updateEmployee()
  {
    this.ngxSpinnerService.show();

    console.error(this.employeeForm.value);
    let employee=this.employeeForm.value;

    this.employeeService.updateEmployee('http://localhost:8081/api/v1/employee/update', employee).subscribe(
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
        this.editMode=false;

        this.ngxSpinnerService.hide();
      },
      error1 =>
      {
        this.ngxSpinnerService.hide();
      }
    );

  }

  cancelUpdate()
  {
    this.editMode=false;
  }
}
