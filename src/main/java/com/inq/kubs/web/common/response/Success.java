package com.inq.kubs.web.common.response;

import lombok.Data;

@Data
public class Success {

    private boolean success;

    public Success(boolean success) {
        this.success = success;
    }
}
