package com.inq.kubs.web.login.dto;

import com.inq.kubs.domain.member.Member;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class MemberSessionDto {

    private String name;

    private Long studentId;

    private String email;

    private String phoneNumber;

    public MemberSessionDto(Member member) {
        this.name = member.getName();
        this.studentId = member.getStudentId();
        this.email = member.getEmail();
        this.phoneNumber = member.getPhoneNumber();
    }
}
