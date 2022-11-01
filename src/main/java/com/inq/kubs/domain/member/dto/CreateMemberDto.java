package com.inq.kubs.domain.member.dto;

import com.inq.kubs.domain.department.Department;
import com.inq.kubs.domain.member.dto.request.CreateMemberRequest;
import lombok.Data;

@Data
public class CreateMemberDto {

    private String name;

    private Long studentId;

    private String pw;

    private String email;

    private String phoneNumber;

    private Department department;

    //편의 메서드

    public void registerDepartment(Department department) {
        this.department = department;
    }

    public CreateMemberDto(CreateMemberRequest request) {
        this.name = request.getName();
        this.studentId = request.getStudentId();
        this.pw = request.getPw();
        this.email = request.getEmail();
        this.phoneNumber = request.getPhoneNumber();
    }
}
