package com.pj.keycloak.web;

import com.pj.keycloak.model.Employee;
import com.pj.keycloak.service.EmployeeService;
import com.pj.keycloak.util.UserInfoUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/employee")
public class EmployeeController
{
	private final EmployeeService employeeService;
	private final UserInfoUtil userInfoUtil;

	private final Logger logger = LoggerFactory.getLogger(EmployeeController.class);

	public EmployeeController(EmployeeService employeeService, UserInfoUtil userInfoUtil)
	{
		this.employeeService = employeeService;
		this.userInfoUtil = userInfoUtil;
	}

	@GetMapping(path = "/list")
	public List<Employee> findAll(HttpServletRequest httpServletRequest)
	{
		logger.info("User Id: {}", userInfoUtil.getPreferredUsername(httpServletRequest));
		return employeeService.findAll();
	}

	@GetMapping(path = "/find/{id}")
	public Optional<Employee> findById(@PathVariable Long id)
	{
		return employeeService.findById(id);
	}


	@DeleteMapping(path = "/delete/{id}")
	public void deleteEmployee(@PathVariable Long id)
	{
		employeeService.deleteById(id);
	}
}
