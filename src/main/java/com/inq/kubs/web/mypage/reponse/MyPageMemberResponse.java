package com.inq.kubs.web.mypage.reponse;

import com.inq.kubs.web.login.dto.MemberSessionDto;
import lombok.Data;

@Data
public class MyPageMemberResponse {

    private String name;
    private Long studentId;
    private String email;
    private String phoneNumber;
    private String departmentName;

    public MyPageMemberResponse(MemberSessionDto sessionDto, String departmentName) {
        this.name = sessionDto.getName();
        this.studentId = sessionDto.getStudentId();
        this.email = sessionDto.getEmail();
        this.phoneNumber = sessionDto.getPhoneNumber();
        this.departmentName = departmentName;
    }
}
