package com.inq.kubs.domain.member.dto.request;

import lombok.Data;

@Data
public class FindPwRequest {

    private Long studentId;

    private String phoneNumber;

    private String email;
}
