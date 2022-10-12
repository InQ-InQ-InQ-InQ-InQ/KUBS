package com.inq.kubs.web.member.dto.request;

import com.inq.kubs.domain.department.Department;
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

    public CreateMemberDto createMemberDto(Department department) {
        return new CreateMemberDto(
                this.name, this.studentId, this.pw, this.email, this.phoneNumber, department);
    }
}
