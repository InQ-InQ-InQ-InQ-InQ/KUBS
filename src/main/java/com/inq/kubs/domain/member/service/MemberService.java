package com.inq.kubs.domain.member.service;

import com.inq.kubs.domain.department.Department;
import com.inq.kubs.domain.department.repository.DepartmentRepository;
import com.inq.kubs.domain.member.Member;
import com.inq.kubs.domain.member.dto.CreateMemberDto;
import com.inq.kubs.domain.member.repository.MemberRepository;
import com.inq.kubs.web.exception.ErrorType;
import com.inq.kubs.web.exception.KubsException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {

    private final MemberRepository memberRepository;
    private final DepartmentRepository departmentRepository;

    @Transactional
    public Long createMember(CreateMemberDto dto, Long departmentId) {

        Department department = departmentRepository.findById(departmentId)
                .orElseThrow(() -> new KubsException(ErrorType.NOT_EXIST_PK));

        dto.registerDepartment(department);
        Member member = Member.createMember(dto);
        memberRepository.save(member);

        return member.getId();
    }
}
