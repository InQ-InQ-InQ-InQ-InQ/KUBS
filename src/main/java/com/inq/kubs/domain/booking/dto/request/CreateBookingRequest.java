package com.inq.kubs.domain.booking.dto.request;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class CreateBookingRequest {

    private Long placeId;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;

    @DateTimeFormat(pattern = "HH")
    private LocalTime startTime;

    private Integer usageTime;

    public LocalTime getEndTime() {
        return startTime.plusHours(usageTime);
    }
}
