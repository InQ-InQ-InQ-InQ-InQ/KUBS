package com.inq.kubs.domain.member.dto;

import com.inq.kubs.domain.department.Department;
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

    public CreateMemberDto(String name, Long studentId, String pw, String email, String phoneNumber) {
        this.name = name;
        this.studentId = studentId;
        this.pw = pw;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}
