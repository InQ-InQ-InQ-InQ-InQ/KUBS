package com.inq.kubs.domain.place.dto.request;

import com.inq.kubs.domain.place.Area;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class PreBookingRequest {

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;

    @DateTimeFormat(pattern = "HH:mm")
    private LocalTime startTime;

    private Integer usageTime;

    private Area area;

    //편의 메서드
    public LocalTime getEndTime() {
        return startTime.plusHours(usageTime);
    }
}
