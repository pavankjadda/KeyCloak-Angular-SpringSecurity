import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { KeycloakService } from '../keycloak/keycloak.service';
import { EmployeeProject } from './employee-project';
import { EmployeeProjectService } from './employee-project.service';

@Component({
	selector: 'app-employee-project',
	templateUrl: './employee-project.component.html',
	styleUrls: ['./employee-project.component.css'],
})
export class EmployeeProjectComponent implements OnInit {
	employeeProjects: Array<EmployeeProject>;

	constructor(
		private employeeProjectService: EmployeeProjectService,
		private keycloakService: KeycloakService,
		private ngxSpinnerService: NgxSpinnerService
	) {}

	ngOnInit() {
		this.getEmployeeProjects();
	}

	private getEmployeeProjects() {
		this.ngxSpinnerService.show();
		this.employeeProjectService.getEmployeeProjects('http://localhost:8081/api/v1/employee_project/list').subscribe(
			(data) => {
				this.employeeProjects = data;
				this.ngxSpinnerService.hide();
			},
			(error1) => {
				this.ngxSpinnerService.hide();
			}
		);
	}
}
