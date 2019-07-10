package com.pj.keycloak.model;


import lombok.Data;
import org.hibernate.annotations.Immutable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Immutable
@Table(name = "employee_project_view")
@Data
public class EmployeeProjectView
{
    @Id
    private Long employeeId;

    private String firstName;

    private String lastName;

    private Double salary;

    private String projectLocation;

    private String projectName;


    @Override
    public boolean equals(Object o)
    {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        EmployeeProjectView that = (EmployeeProjectView) o;
        return getEmployeeId().equals(that.getEmployeeId());
    }

    @Override
    public int hashCode()
    {
        return Objects.hash(getEmployeeId());
    }
}
