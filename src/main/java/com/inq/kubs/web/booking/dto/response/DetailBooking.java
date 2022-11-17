package com.inq.kubs.web.booking.dto.response;

import com.inq.kubs.domain.booking.Booking;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class DetailBooking {
    private String name;
    private String placeName;
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;

    public DetailBooking(Booking booking) {
        this.name = booking.getMember().getName();
        this.date = booking.getDate();
        this.placeName = booking.getPlace().getPlaceName();
        this.startTime = booking.getStartTime();
        this.endTime = booking.getEndTime();
    }
}
