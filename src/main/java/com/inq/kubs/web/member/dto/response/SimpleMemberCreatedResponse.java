package com.inq.kubs.web.member.dto.response;

import lombok.Data;

@Data
public class SimpleMemberCreatedResponse {

    private Long id;

    public SimpleMemberCreatedResponse(Long id) {
        this.id = id;
    }
}
