package com.inq.kbus.web.exception;

import com.inq.kbus.web.member.MemberController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice(assignableTypes = {
        MemberController.class
})
public class ApiExceptionHandler {

    @ExceptionHandler(KubsException.class)
    public ResponseEntity<ErrorResponse> handleException(KubsException e) {

        ErrorType errorType = e.getErrorType();
        ErrorResponse errorResponse = new ErrorResponse(false, errorType.getCode(), errorType.getMessage());

        return new ResponseEntity<>(errorResponse, errorType.getHttpStatus());
    }
}
