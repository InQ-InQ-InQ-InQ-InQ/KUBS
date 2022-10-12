package com.inq.kbus.domain.member;

import com.inq.kbus.domain.department.Department;
import com.inq.kbus.domain.member.dto.CreateMemberDto;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity @Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Long studentId;

    private String pw;

    private String email;

    private String phoneNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id")
    private Department department;

    //편의 메서드
    public Member(CreateMemberDto dto) {
        this.name = dto.getName();
        this.studentId = dto.getStudentId();
        this.pw = dto.getPw();
        this.email = dto.getEmail();
        this.phoneNumber = dto.getPhoneNumber();
        this.department = dto.getDepartment();
    }

    //생성 메서드
    public static Member createMember(CreateMemberDto dto) {
        return new Member(dto);
    }
}
