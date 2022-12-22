package com.inq.kubs.web.mypage.reponse;

import com.inq.kubs.domain.booking.Booking;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class PagedBooking {

    private String placeName;

    private LocalDate date;

    private LocalTime startTime;

    public PagedBooking(Booking booking) {
        this.placeName = booking.getPlace().getPlaceName();
        this.date = booking.getDate();
        this.startTime = booking.getStartTime();
    }
}
