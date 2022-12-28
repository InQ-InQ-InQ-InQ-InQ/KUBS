package com.inq.kubs.web.login;

import com.inq.kubs.domain.login.LoginService;
import com.inq.kubs.domain.member.Member;
import com.inq.kubs.web.common.consts.SessionConst;
import com.inq.kubs.web.login.dto.LoginRequest;
import com.inq.kubs.web.login.dto.MemberSessionDto;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
public class LoginController {

    private final LoginService loginService;

    @PostMapping("/login")
    @Operation(summary = "로그인", description = "로그인 아이디와 비밀번호를 입력받아 로그인을 한다.")
    public ResponseEntity<Void> login(@RequestBody LoginRequest loginRequest, HttpServletRequest request) {

        log.info("id = {}, pw = {}", loginRequest.getStudentId(), loginRequest.getPassword());
        Member loginMember = loginService.login(loginRequest.getStudentId(), loginRequest.getPassword());

        HttpSession session = request.getSession(true);
        MemberSessionDto memberSessionDto = new MemberSessionDto(loginMember);
        session.setAttribute(SessionConst.LOGIN_MEMBER, memberSessionDto);

        return ResponseEntity.noContent().build();
    }

    @PostMapping("/logout")
    @Operation(summary = "로그아웃", description = "로그아웃을 한다.")
    public ResponseEntity<Void> logout(HttpServletRequest request) {

        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }

        return ResponseEntity.noContent().build();
    }
}
