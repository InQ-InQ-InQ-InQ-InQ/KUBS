package com.inq.kubs.web.member.dto.request;

import com.inq.kubs.domain.member.dto.CreateMemberDto;
import lombok.Data;

@Data
public class CreateMemberRequest {

    private String name;

    private Long studentId;

    private String pw;

    private String email;

    private String phoneNumber;

    private Long departmentId;

    public CreateMemberDto newCreateMemberDto() { //CreateMemberDto 의 department 는 값을 넣지 않는다.
        return new CreateMemberDto(
                this.name, this.studentId, this.pw, this.email, this.phoneNumber);
    }
}
