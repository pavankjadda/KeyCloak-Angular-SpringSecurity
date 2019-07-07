package com.pj.keycloak.web;

import com.pj.keycloak.model.Employee;
import com.pj.keycloak.service.EmployeeService;
import com.pj.keycloak.util.UserInfoUtil;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/employee")
public class EmployeeController
{
    private final EmployeeService employeeService;
    private final UserInfoUtil userInfoUtil;

    public EmployeeController(EmployeeService employeeService, UserInfoUtil userInfoUtil)
    {
        this.employeeService = employeeService;
        this.userInfoUtil = userInfoUtil;
    }

    @GetMapping(path = "/list")
    public List<Employee> findAll()
    {
        System.out.println("User Id: "+userInfoUtil.getUserId());
        return employeeService.findAll();
    }

    @GetMapping(path = "/find/{id}")
    public Optional<Employee> findById(@PathVariable Long id)
    {
        return employeeService.findById(id);
    }
}
