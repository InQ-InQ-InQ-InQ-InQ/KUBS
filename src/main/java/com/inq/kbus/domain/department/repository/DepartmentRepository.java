package com.inq.kbus.domain.department.repository;

import com.inq.kbus.domain.department.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Long> {

}
