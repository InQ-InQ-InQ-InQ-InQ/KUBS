package com.inq.kubs.domain.member.dto.request;

import lombok.Data;

@Data
public class ChangePwRequest {

    private Long studentId;

    private String newPw;

    private String checkPw;
}
