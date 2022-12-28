package com.inq.kubs.config;

import com.inq.kubs.web.login.interceptor.LoginCheckInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new LoginCheckInterceptor())
                .order(1)
                .addPathPatterns("/api/**", "/")
                .excludePathPatterns("/api/login", "/api/member", "/api/pw/**",
                                    "/api/id_check/**", "/api/email/**");
    }
}
