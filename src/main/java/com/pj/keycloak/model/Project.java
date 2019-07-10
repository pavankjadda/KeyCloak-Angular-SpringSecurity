package com.pj.keycloak.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "project")
@Data
public class Project implements Serializable
{
    private static final long serialVersionUID = 4568718070806594966L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "location")
    private String location;

    @Column(name = "budget")
    private Double budget;

    @ManyToMany(mappedBy = "projects")
    @JsonIgnore
    private Set<Employee> employees=new HashSet<>();
}
