package com.inq.kubs.domain.department.repository;

import com.inq.kubs.domain.department.Department;
import com.inq.kubs.domain.place.Area;
import com.inq.kubs.domain.place.Place;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
;
}
