import { TestBed } from '@angular/core/testing';

import { EmployeeProjectService } from './employee-project.service';

describe('EmployeeProjectService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: EmployeeProjectService = TestBed.get(EmployeeProjectService);
		expect(service).toBeTruthy();
	});
});
