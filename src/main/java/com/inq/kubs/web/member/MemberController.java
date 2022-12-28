package com.inq.kubs.web.member;

import com.inq.kubs.domain.email.EmailService;
import com.inq.kubs.domain.member.dto.request.ChangePwRequest;
import com.inq.kubs.domain.member.dto.request.FindPwRequest;
import com.inq.kubs.domain.member.service.MemberService;
import com.inq.kubs.web.common.logic.CommonMethod;
import com.inq.kubs.domain.member.dto.request.CreateMemberRequest;
import com.inq.kubs.web.member.dto.response.SimpleMemberCreatedResponse;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class MemberController {

    private final MemberService memberService;
    private final EmailService emailService;

    @PostMapping("/member")
    @Operation(summary = "회원가입", description = "회원정보를 받아 회원가입을 한다")
    public ResponseEntity<SimpleMemberCreatedResponse> createMember(@RequestBody CreateMemberRequest request) {

        Long memberId = memberService.createMember(request);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Location", "/api/members/" + memberId);

        return new ResponseEntity<>(new SimpleMemberCreatedResponse(memberId), headers, HttpStatus.CREATED);
    }

    @PostMapping("/pw/find")
    public ResponseEntity<Void> PrepareFindPw(@RequestBody FindPwRequest request,
                                                   HttpServletRequest httpServletRequest) {

        memberService.checkFindPwRequest(request);
        CommonMethod.registerKeyAndSendMail(request.getEmail(), httpServletRequest, emailService);

        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/pw/find")
    public ResponseEntity<Void> changePw(@RequestBody ChangePwRequest request) {

        memberService.changePw(request, request.getStudentId());

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/id_check/{studentId}")
    public ResponseEntity<Void> validateDuplicatedStudentId(@PathVariable Long studentId) {

        memberService.validateDuplicatedStudentId(studentId);

        return ResponseEntity.noContent().build();
    }
}
