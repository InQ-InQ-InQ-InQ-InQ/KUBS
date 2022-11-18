package com.inq.kubs.web.booking.dto.response;
import com.inq.kubs.domain.booking.Booking;
import lombok.Data;
import java.time.LocalDate;
import java.time.LocalTime;
@Data
public class DetailBookingResponse {
    public DetailBookingResponse(Booking booking, String name) {
        this.name = name;
        this.placeName = booking.getPlace().getPlaceName();
        this.date = booking.getDate();
        this.startTime = booking.getStartTime();
        this.endTime = booking.getEndTime();
    }

    private String name;
    private String placeName;
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;
}