package com.pj.keycloak.web;

import com.pj.keycloak.model.EmployeeProjectView;
import com.pj.keycloak.repo.EmployeeProjectRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/employee_project")
public class EmployeeProjectController
{
    private final EmployeeProjectRepository employeeProjectRepository;

    public EmployeeProjectController(EmployeeProjectRepository employeeProjectRepository)
    {
        this.employeeProjectRepository = employeeProjectRepository;
    }

    @GetMapping(path = "/list")
    public List<EmployeeProjectView> findAll()
    {
        return employeeProjectRepository.findAll();
    }
}
