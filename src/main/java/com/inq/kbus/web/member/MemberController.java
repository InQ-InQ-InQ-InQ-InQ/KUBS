package com.inq.kbus.web.member;

import com.inq.kbus.domain.department.Department;
import com.inq.kbus.domain.department.repository.DepartmentRepository;
import com.inq.kbus.domain.member.dto.CreateMemberDto;
import com.inq.kbus.domain.member.service.MemberService;
import com.inq.kbus.web.exception.ErrorType;
import com.inq.kbus.web.exception.KubsException;
import com.inq.kbus.web.member.dto.request.CreateMemberRequest;
import com.inq.kbus.web.member.dto.response.SimpleMemberCreatedResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api")
public class MemberController {

    private final MemberService memberService;
    private final DepartmentRepository departmentRepository;

    @PostMapping("/members")
    public ResponseEntity<SimpleMemberCreatedResponse> createMember(@ModelAttribute CreateMemberRequest request) {

        Department department = departmentRepository.findById(request.getDepartmentId())
                .orElseThrow(() -> new KubsException(ErrorType.NOT_EXIST_PK));

        Long memberId = memberService.createMember(request.createMemberDto(department));

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Location", "/api/members/" + memberId);

        return new ResponseEntity<>(new SimpleMemberCreatedResponse(memberId), headers, HttpStatus.CREATED);
    }
}
