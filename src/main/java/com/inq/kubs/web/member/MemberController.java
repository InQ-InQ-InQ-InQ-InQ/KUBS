package com.inq.kubs.web.member;

import com.inq.kubs.domain.email.EmailService;
import com.inq.kubs.domain.email.MailDto;
import com.inq.kubs.domain.member.dto.request.ChangePwRequest;
import com.inq.kubs.domain.member.dto.request.FindPwRequest;
import com.inq.kubs.domain.member.service.MemberService;
import com.inq.kubs.web.common.consts.SessionConst;
import com.inq.kubs.web.common.logic.CommonMethod;
import com.inq.kubs.web.common.response.Success;
import com.inq.kubs.web.email.EmailController;
import com.inq.kubs.web.exception.ErrorType;
import com.inq.kubs.web.exception.KubsException;
import com.inq.kubs.domain.member.dto.request.CreateMemberRequest;
import com.inq.kubs.web.login.dto.MemberSessionDto;
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

    @PostMapping("/member")
    @Operation(summary = "회원가입", description = "회원정보를 받아 회원가입을 한다")
    public ResponseEntity<SimpleMemberCreatedResponse> createMember(@ModelAttribute CreateMemberRequest request) {

        Long memberId = memberService.createMember(request);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Location", "/api/members/" + memberId);

        return new ResponseEntity<>(new SimpleMemberCreatedResponse(true, memberId), headers, HttpStatus.CREATED);
    }

    @PostMapping("/pw/find")
    public ResponseEntity<Success> PrepareFindPw(@ModelAttribute FindPwRequest request,
                                                   HttpServletRequest httpServletRequest) {

        memberService.checkFindPwRequest(request);
        CommonMethod.registerKeyAndSendMail(request.getEmail(), httpServletRequest, emailService);

        return new ResponseEntity<>(new Success(true), HttpStatus.OK);
    }

    @PutMapping("/pw/find")
    public ResponseEntity<Success> changePw(@ModelAttribute ChangePwRequest request,
                                            @SessionAttribute(value = SessionConst.LOGIN_MEMBER,
                                                    required = false) MemberSessionDto sessionDto) {

        memberService.changePw(request, sessionDto.getId());

        return new ResponseEntity<>(new Success(true), HttpStatus.OK);
    }
}
