package com.inq.kubs.web.exception;

import com.inq.kubs.web.common.response.ErrorResponse;
import com.inq.kubs.web.login.LoginController;
import com.inq.kubs.web.member.MemberController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice(assignableTypes = {
        MemberController.class, LoginController.class
})
public class ApiExceptionHandler {

    @ExceptionHandler(KubsException.class)
    public ResponseEntity<ErrorResponse> handleException(KubsException e) {

        ErrorType errorType = e.getErrorType();
        ErrorResponse errorResponse = new ErrorResponse(false, errorType.getCode(), errorType.getMessage());

        return new ResponseEntity<>(errorResponse, errorType.getHttpStatus());
    }
}
