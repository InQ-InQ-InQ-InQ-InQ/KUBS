package com.inq.kubs.domain.department.repository;

import com.inq.kubs.domain.department.Department;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DepartmentRepository extends JpaRepository<Department, Long>{
    List<Department> findByDepartmentNameContaining(String search);
}
