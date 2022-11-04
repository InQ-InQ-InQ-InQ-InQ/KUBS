package com.inq.kubs.web.booking.dto.response;

public class SimpleBookingCreatedResponse
{

    private boolean success;
    private Long id;

    public SimpleBookingCreatedResponse(boolean success, Long id)
    {
        this.success = success;
        this.id = id;
    }

    // 응답 = 잘 예약이 되었다~ 생성되고 그 생성된 예약의 아이디와 성공여부 return;
}
