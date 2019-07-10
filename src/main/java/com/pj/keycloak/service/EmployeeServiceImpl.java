package com.pj.keycloak.service;

import com.pj.keycloak.model.Employee;
import com.pj.keycloak.repo.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService
{
    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository)
    {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public List<Employee> findAll()
    {
        return employeeRepository.findAll();
    }

    @Override
    public Optional<Employee> findById(Long id)
    {
        return employeeRepository.findById(id);
    }

    @Override
    public Employee updateProfile(Employee employee)
    {
        employee.setFirstName("John2");
        employee.setLastName("Doe2");
        employee.setPhone("54541151515");
        employee.setEmail("John@test.com");
        employee.setLocation("Fairfax");

        return employeeRepository.saveAndFlush(employee);
    }
}
