package com.inq.kubs.domain.email;

import lombok.Data;

@Data
public class MailDto {

    private String address;
    private String title;
    private String content;

    public MailDto(String address, String title, String content) {
        this.address = address;
        this.title = title;
        this.content = content;
    }
}
