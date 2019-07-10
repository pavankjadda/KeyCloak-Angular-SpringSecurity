package com.pj.keycloak.repo;

import com.pj.keycloak.model.EmployeeProjectView;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeProjectRepository extends JpaRepository<EmployeeProjectView,Long>
{
}
