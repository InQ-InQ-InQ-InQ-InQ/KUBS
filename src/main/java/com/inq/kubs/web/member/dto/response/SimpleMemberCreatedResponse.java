package com.inq.kubs.web.member.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@Schema(description = "회원가입 성공 응답")
public class SimpleMemberCreatedResponse {

    @Schema(description = "회원가입 된 회원 PK")
    private Long id;

    public SimpleMemberCreatedResponse(Long id) {
        this.id = id;
    }
}
