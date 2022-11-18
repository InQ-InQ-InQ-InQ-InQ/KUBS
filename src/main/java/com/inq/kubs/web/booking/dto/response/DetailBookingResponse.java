package com.inq.kubs.web.booking.dto.response;
import lombok.Data;
import java.time.LocalDate;
import java.time.LocalTime;
@Data
public class DetailBookingResponse {
    public DetailBookingResponse(String name, String placeName, LocalDate date, LocalTime startTime, LocalTime endTime) {
        this.name = name;
        this.placeName = placeName;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    private String name;
    private String placeName;
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;
}