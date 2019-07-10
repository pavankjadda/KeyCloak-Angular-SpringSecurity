package com.pj.keycloak.model;


import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Objects;


@Entity
@Table(name = "employee")
@Data
public class Employee extends UserProfile implements Serializable
{
    private static final long serialVersionUID = -2482579485413606056L;

    @Column(name = "employee_id")
    private Long employeeId;

    @Column(name = "location")
    private String location;

    @Column(name = "salary")
    private Double salary;

    @Override
    public boolean equals(Object o)
    {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        if (!super.equals(o))
            return false;
        Employee employee = (Employee) o;
        return getEmployeeId().equals(employee.getEmployeeId());
    }

    @Override
    public int hashCode()
    {
        return Objects.hash(super.hashCode(), getEmployeeId());
    }
}
