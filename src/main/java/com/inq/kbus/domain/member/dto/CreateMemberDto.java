package com.inq.kbus.domain.member.dto;

import com.inq.kbus.domain.department.Department;
import lombok.Data;

@Data
public class CreateMemberDto {

    private String name;

    private Long studentId;

    private String pw;

    private String email;

    private String phoneNumber;

    private Department department;

    public CreateMemberDto(String name, Long studentId, String pw, String email, String phoneNumber, Department department) {
        this.name = name;
        this.studentId = studentId;
        this.pw = pw;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.department = department;
    }
}
