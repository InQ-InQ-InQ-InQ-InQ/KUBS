package com.inq.kubs.domain.login;

import com.inq.kubs.domain.member.Member;
import com.inq.kubs.domain.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.security.auth.login.LoginException;

@Service
@RequiredArgsConstructor
public class LoginService {
    private final MemberRepository memberRepository;

    public Member login(Long studentId, String pw) {
        return memberRepository.findByStudentId(studentId)
                .filter(m -> m.getPw().equals(pw))
                .orElseThrow(() -> new LoginException("로그인 실패"));
    }
}