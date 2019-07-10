package com.pj.keycloak.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "user_profile")
@Inheritance(strategy = InheritanceType.JOINED)
@Data
public class UserProfile implements Serializable
{
    private static final long serialVersionUID = -3644042583054165587L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_guid", nullable = false)
    private String userGuid;

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
        UserProfile that = (UserProfile) o;
        return getId().equals(that.getId()) &&
                getUserGuid().equals(that.getUserGuid());
    }

    @Override
    public int hashCode()
    {
        return Objects.hash(getId(), getUserGuid());
    }
}
