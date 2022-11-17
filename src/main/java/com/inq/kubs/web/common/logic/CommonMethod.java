package com.inq.kubs.web.common.logic;

import com.inq.kubs.domain.email.EmailService;
import com.inq.kubs.domain.email.MailDto;
import com.inq.kubs.web.common.consts.SessionConst;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Component
public abstract class CommonMethod {

    //세션에 인증 키를 등록하고 인증키가 담긴 메일을 전송한다.
    public static void registerKeyAndSendMail(String email, HttpServletRequest request,
                                              EmailService emailService) {
        int intKey = (int) (Math.random() * 8999 + 1000);
        String key = String.valueOf(intKey);
        MailDto mailDto = new MailDto(email, "KUBS_학생인증", key);

        HttpSession session = request.getSession();
        session.setAttribute(SessionConst.V_KEY, key);

        emailService.sendValidationMail(mailDto);
    }
}
