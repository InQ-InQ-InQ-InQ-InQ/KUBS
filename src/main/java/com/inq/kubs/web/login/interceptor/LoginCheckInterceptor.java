package com.inq.kubs.web.login.interceptor;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.inq.kubs.web.common.consts.SessionConst;
import com.inq.kubs.web.common.response.ErrorResponse;
import com.inq.kubs.web.exception.ErrorType;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Slf4j
public class LoginCheckInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        ObjectMapper objectMapper = new ObjectMapper();

        String requestURI = request.getRequestURI();
        log.info("인증 체크 인터셉터 실행 {}", requestURI);
        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute(SessionConst.LOGIN_MEMBER) == null) {
            log.info("미인증 사용자 요청");

            ErrorResponse errorResponse = new ErrorResponse();

            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.setStatus(401);

            String resultJson = objectMapper.writeValueAsString(errorResult);
            response.getWriter().write(resultJson);

            return false;
        }
        return true;
    }
}
