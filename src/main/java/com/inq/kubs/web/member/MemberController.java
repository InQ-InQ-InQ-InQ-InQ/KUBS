package com.inq.kubs.web.member;

import com.inq.kubs.domain.email.EmailService;
import com.inq.kubs.domain.email.MailDto;
import com.inq.kubs.domain.member.service.MemberService;
import com.inq.kubs.web.common.consts.SessionConst;
import com.inq.kubs.web.common.response.Success;
import com.inq.kubs.web.exception.ErrorType;
import com.inq.kubs.web.exception.KubsException;
import com.inq.kubs.web.member.dto.request.CreateMemberRequest;
import com.inq.kubs.web.member.dto.response.SimpleMemberCreatedResponse;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class MemberController {

    private final MemberService memberService;
    private final EmailService emailService;

    @PostMapping("/members")
    @Operation(summary = "회원가입", description = "회원정보를 받아 회원가입을 한다")
    public ResponseEntity<SimpleMemberCreatedResponse> createMember(@ModelAttribute CreateMemberRequest request) {

        Long memberId = memberService.createMember(request.newCreateMemberDto(), request.getDepartmentId());

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Location", "/api/members/" + memberId);

        return new ResponseEntity<>(new SimpleMemberCreatedResponse(true, memberId), headers, HttpStatus.CREATED);
    }

    @GetMapping("/email/validation")
    @Operation(summary = "검증 이메일 발송", description = "이메일을 입력받아 해당 이메일로 검증코드가 담긴 메일을 발송한다.")
    public ResponseEntity<Success> sendValidationMail(@RequestParam String email,
                                                      HttpServletRequest request) {

        int intKey = (int) (Math.random() * 8999 + 1000);
        String key = String.valueOf(intKey);
        MailDto mailDto = new MailDto(email, "KUBS_학생인증", key);

        HttpSession session = request.getSession();
        session.setAttribute(SessionConst.V_KEY, key);

        emailService.sendValidationMail(mailDto);

        return new ResponseEntity<>(new Success(true), HttpStatus.OK);
    }

    @PostMapping("/email/validation")
    @Operation(summary = "검증코드 확인", description = "검증코드를 입력받아 올바른 코드인지 확인한다.")
    public ResponseEntity<Success> validateKey(@RequestParam("key") String inputKey,
                                               HttpServletRequest request) {

        HttpSession session = request.getSession(false);
        String key = (String) session.getAttribute(SessionConst.V_KEY);

        if (key.equals(inputKey)) {
            return new ResponseEntity<>(new Success(true), HttpStatus.OK);
        } else throw new KubsException(ErrorType.INCONSISTENT_KEY);
    }
}
