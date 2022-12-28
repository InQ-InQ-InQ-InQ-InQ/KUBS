package com.inq.kubs.web.common.response;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@Schema(description = "실패 응답")
public class ErrorResponse {

    @Schema(description = "에러 코드")
    private String code;
    @Schema(description = "에러 메세지")
    private String message;

    public ErrorResponse(String code, String message) {
        this.code = code;
        this.message = message;
    }
}
