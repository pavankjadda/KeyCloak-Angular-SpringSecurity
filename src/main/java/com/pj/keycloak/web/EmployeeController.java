package com.pj.keycloak.web;

import com.pj.keycloak.model.Employee;
import com.pj.keycloak.service.EmployeeService;
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

    public EmployeeController(EmployeeService employeeService)
    {
        this.employeeService = employeeService;
    }

    @GetMapping(path = "/list")
    public List<Employee> findAll()
    {
        return employeeService.findAll();
    }

    @GetMapping(path = "/find/{id}")
    public Optional<Employee> findById(@PathVariable Long id)
    {
        return employeeService.findById(id);
    }
}
