package com.inq.kbus.web.exception;

import lombok.Getter;

@Getter
public class KubsException extends RuntimeException{

    private ErrorType errorType;

    public KubsException(ErrorType errorType) {
        super(errorType.getMessage());
        this.errorType = errorType;
    }
}
