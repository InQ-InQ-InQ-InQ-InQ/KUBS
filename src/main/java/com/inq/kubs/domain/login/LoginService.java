package com.inq.kubs.domain.login;

import com.inq.kubs.domain.member.Member;
import com.inq.kubs.domain.member.repository.MemberRepository;
import com.inq.kubs.web.exception.ErrorType;
import com.inq.kubs.web.exception.KubsException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class LoginService {
    private final MemberRepository memberRepository;

    @Transactional(readOnly = true)
    public Member login(Long studentId, String pw) {
        return memberRepository.findByStudentId(studentId)
                .filter(m -> m.getPassword().equals(pw))
                .orElseThrow(() -> new KubsException(ErrorType.LOGIN_FAIL));
    }
}