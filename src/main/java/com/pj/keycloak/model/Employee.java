package com.pj.keycloak.model;


import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;


@Entity
@Table(name = "employee")
@Data
public class Employee implements Serializable
{
    private static final long serialVersionUID = -2482579485413606056L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;


    @Override
    public boolean equals(Object o)
    {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Employee employee = (Employee) o;
        return getId().equals(employee.getId());
    }

    @Override
    public int hashCode()
    {
        return Objects.hash(getId());
    }
}
