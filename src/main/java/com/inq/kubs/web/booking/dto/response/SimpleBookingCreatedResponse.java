package com.inq.kubs.web.booking.dto.response;

import lombok.Data;

@Data
public class SimpleBookingCreatedResponse {
    private boolean success;
    private Long id;

    public SimpleBookingCreatedResponse(boolean success, Long id)
    {
        this.success = success;
        this.id = id;
    }
}
