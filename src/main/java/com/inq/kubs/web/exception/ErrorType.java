package com.inq.kubs.web.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum ErrorType {

    NOT_EXIST_PK("Not Found", "존재하지 않는 PK 입니다.", HttpStatus.NOT_FOUND),
    INCONSISTENT_KEY("BAD_REQUEST", "일치하지 않는 키 입니다", HttpStatus.BAD_REQUEST),
    LOGIN_FAIL("BAD_REQUEST", "아이디 혹은 비밀번호가 틀렸습니다.", HttpStatus.BAD_REQUEST);

    private final String code;
    private final String message;
    private final HttpStatus httpStatus;

    ErrorType(String code, String message, HttpStatus httpStatus) {
        this.code = code;
        this.message = message;
        this.httpStatus = httpStatus;
    }
}
