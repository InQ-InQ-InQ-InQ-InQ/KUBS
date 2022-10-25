package com.inq.kubs.web.login.dto;

import lombok.Data;

@Data
public class LoginRequest {

    private Long studentId;

    private String loginPw;
}
