package com.inq.kbus.web.member;

import com.inq.kbus.domain.member.dto.CreateMemberDto;
import com.inq.kbus.domain.member.service.MemberService;
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

    @PostMapping("/members")
    public ResponseEntity<SimpleMemberCreatedResponse> createMember(@ModelAttribute CreateMemberDto dto) {

        Long memberId = memberService.createMember(dto);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Location", "/api/members/" + memberId);

        return new ResponseEntity<>(new SimpleMemberCreatedResponse(memberId), headers, HttpStatus.CREATED);
    }
}
