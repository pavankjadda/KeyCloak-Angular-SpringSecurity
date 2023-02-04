import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
	providedIn: 'root',
})
export class EmployeeService {
	constructor(private httpClient: HttpClient) {}

	getEmployees(url: string) {
		return this.httpClient.get<Employee[]>(url);
	}

	getEmployeeById(url: string) {
		return this.httpClient.get<Employee>(url);
	}

	updateEmployee(url: string, employee: Employee) {
		return this.httpClient.post<Employee>(url, employee);
	}

	createEmployee(url: string, employee: Employee) {
		return this.httpClient.post<Employee[]>(url, employee);
	}

	deleteEmployee(url: string) {
		return this.httpClient.delete(url);
	}
}
