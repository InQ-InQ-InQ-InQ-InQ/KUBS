package com.inq.kubs.web.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum ErrorType {

    NOT_EXIST_KEY("NOT FOUND", "존재하지 않는 키 입니다.", HttpStatus.NOT_FOUND),
    INCONSISTENT_KEY("BAD_REQUEST", "일치하지 않는 키 입니다", HttpStatus.BAD_REQUEST),
    LOGIN_FAIL("BAD_REQUEST", "아이디 혹은 비밀번호가 틀렸습니다.", HttpStatus.BAD_REQUEST),
    CONFLICTED_BOOKING("CONFLICT", "해당 시간에 겹치는 예약이 존재합니다.", HttpStatus.CONFLICT),
    INCONSISTENT_DATA("BAD_REQUEST", "일치하지 않는 정보 입니다.", HttpStatus.BAD_REQUEST),
    DUPLICATED_STUDENT_ID("CONFLICT", "이미 존재하는 아이디 입니다.", HttpStatus.CONFLICT),
    DUPLICATED_EMAIL("CONFLICT", "이미 존재하는 이메일 입니다.", HttpStatus.CONFLICT);

    private final String code;
    private final String message;
    private final HttpStatus httpStatus;

    ErrorType(String code, String message, HttpStatus httpStatus) {
        this.code = code;
        this.message = message;
        this.httpStatus = httpStatus;
    }
}
