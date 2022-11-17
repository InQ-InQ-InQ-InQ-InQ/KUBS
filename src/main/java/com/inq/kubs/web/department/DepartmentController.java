package com.inq.kubs.web.department;

import com.inq.kubs.domain.department.Department;
import com.inq.kubs.domain.department.repository.DepartmentRepository;
import com.inq.kubs.web.department.dto.response.DepartmentResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class DepartmentController {

    private final DepartmentRepository departmentRepository;

    @GetMapping("/departments")
    @Transactional
    public ResponseEntity<List<DepartmentResponse>> getSearchedDepartment(
            @RequestParam String search) {

        List<Department> findDepartments = departmentRepository.findByDepartmentNameContaining(search);
        List<DepartmentResponse> result = findDepartments.stream().map(DepartmentResponse::new).collect(Collectors.toList());

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

}
