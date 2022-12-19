package com.inq.kubs.domain.member.dto.request;

import lombok.Data;

@Data
public class CreateMemberRequest {

    private String name;

    private Long studentId;

    private String password;

    private String email;

    private String phoneNumber;

    private Long departmentId;
}
