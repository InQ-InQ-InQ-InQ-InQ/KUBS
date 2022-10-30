package com.inq.kubs.web.common.response;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@Schema(description = "단순 성공 응답")
public class Success {

    @Schema(description = "성공 여부(항상 true)")
    private boolean success;

    public Success(boolean success) {
        this.success = success;
    }
}
