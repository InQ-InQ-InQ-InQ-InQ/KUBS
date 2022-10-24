package com.inq.kubs.web.login;

import com.inq.kubs.domain.login.LoginService;
import com.inq.kubs.domain.member.Member;
import com.inq.kubs.web.common.consts.SessionConst;
import com.inq.kubs.web.login.dto.LoginForm;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;

    @PostMapping("/login")
    @Operation(summary = "로그인", description = "로그인 아이디와 비밀번호를 입력받아 로그인을 한다.")
    public ResponseEntity<Void> login(@ModelAttribute LoginForm loginForm, HttpServletRequest request) {

        Member loginMember = loginService.login(loginForm.getLoginId(), loginForm.getLoginPw());

        HttpSession session = request.getSession(true);
        Long memberId = loginMember.getId();
        session.setAttribute(SessionConst.LOGIN_MEMBER, memberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/logout")
    @Operation(summary = "로그아웃", description = "로그아웃을 한다.")
    public ResponseEntity<Void> logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
