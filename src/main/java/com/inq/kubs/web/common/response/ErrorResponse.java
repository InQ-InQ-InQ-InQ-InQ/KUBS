package com.inq.kubs.web.common.response;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@Schema(description = "실패 응답")
public class ErrorResponse {

    @Schema(description = "성공여부(항상 false)")
    private boolean success;
    @Schema(description = "에러 코드")
    private String code;
    @Schema(description = "에러 메세지")
    private String message;

    public ErrorResponse(boolean success, String code, String message) {
        this.success = success;
        this.code = code;
        this.message = message;
    }
}
