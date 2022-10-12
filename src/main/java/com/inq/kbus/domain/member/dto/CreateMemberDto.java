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
}
