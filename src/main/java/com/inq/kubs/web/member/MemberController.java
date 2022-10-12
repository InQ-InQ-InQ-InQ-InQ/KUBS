package com.inq.kubs.web.member;

import com.inq.kubs.domain.department.Department;
import com.inq.kubs.domain.department.repository.DepartmentRepository;
import com.inq.kubs.domain.email.EmailService;
import com.inq.kubs.domain.email.MailDto;
import com.inq.kubs.domain.member.service.MemberService;
import com.inq.kubs.web.common.response.Success;
import com.inq.kubs.web.exception.ErrorType;
import com.inq.kubs.web.exception.KubsException;
import com.inq.kubs.web.member.dto.request.CreateMemberRequest;
import com.inq.kubs.web.member.dto.response.SimpleMemberCreatedResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api")
public class MemberController {

    private final MemberService memberService;
    private final DepartmentRepository departmentRepository;
    private final EmailService emailService;

    @PostMapping("/members")
    public ResponseEntity<SimpleMemberCreatedResponse> createMember(@ModelAttribute CreateMemberRequest request) {

        Department department = departmentRepository.findById(request.getDepartmentId())
                .orElseThrow(() -> new KubsException(ErrorType.NOT_EXIST_PK));

        Long memberId = memberService.createMember(request.createMemberDto(department));

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Location", "/api/members/" + memberId);

        return new ResponseEntity<>(new SimpleMemberCreatedResponse(memberId), headers, HttpStatus.CREATED);
    }

    @GetMapping("/email/validation")
    public ResponseEntity<Success> sendValidationMail(@RequestParam String email,
                                                      HttpServletRequest request) {

        int intKey = (int) (Math.random() * 8999 + 1000);
        String key = String.valueOf(intKey);
        MailDto mailDto = new MailDto(email, "KUBS_학생인증", key);

        HttpSession session = request.getSession();
        session.setAttribute("MAIL_VALIDATION_KEY", key);

        emailService.sendValidationMail(mailDto);

        return new ResponseEntity<>(new Success(true), HttpStatus.OK);
    }
}