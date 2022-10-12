package com.inq.kubs.domain.email;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    public void sendValidationMail(MailDto dto) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("namhm23@kyonggi.ac.kr");
        message.setTo(dto.getAddress());
        message.setSubject(dto.getTitle());
        message.setText(dto.getContent());

        mailSender.send(message);
    }
}
