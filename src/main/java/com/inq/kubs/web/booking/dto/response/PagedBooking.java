package com.inq.kubs.web.booking.dto.response;

import com.inq.kubs.domain.booking.Booking;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class PagedBooking {

    private String pName;

    private LocalDate date;

    private LocalTime startTime;

    public PagedBooking(Booking booking) {
        this.pName = booking.getPlace().getPlaceName();
        this.date = booking.getDate();
        this.startTime = booking.getStartTime();
    }
}
