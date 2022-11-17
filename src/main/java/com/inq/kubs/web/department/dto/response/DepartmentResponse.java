package com.inq.kubs.web.department.dto.response;

import com.inq.kubs.domain.department.Department;
import lombok.Data;

@Data
public class DepartmentResponse {

    private Long id;

    private String departmentName;

    public DepartmentResponse(Department department) {
        this.id = department.getId();
        this.departmentName = department.getDepartmentName();
    }
}
