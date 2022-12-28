package com.inq.kubs.domain.email;

import com.inq.kubs.domain.member.repository.MemberRepository;
import com.inq.kubs.web.exception.ErrorType;
import com.inq.kubs.web.exception.KubsException;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;
    private final MemberRepository memberRepository;

    public void sendValidationMail(MailDto dto) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("namhm23@kyonggi.ac.kr");
        message.setTo(dto.getAddress());
        message.setSubject(dto.getTitle());
        message.setText(dto.getContent());

        mailSender.send(message);
    }

    public void validateDuplicatedEmail(String email) {
        Boolean isExist = memberRepository.existsByEmail(email);
        if (!isExist) throw new KubsException(ErrorType.DUPLICATED_EMAIL);
    }
}
