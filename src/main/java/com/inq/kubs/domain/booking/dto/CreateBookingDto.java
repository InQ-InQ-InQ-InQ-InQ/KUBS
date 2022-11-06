package com.inq.kubs.domain.booking.dto;

import com.inq.kubs.domain.booking.dto.request.CreateBookingRequest;
import com.inq.kubs.domain.member.Member;
import com.inq.kubs.domain.place.Place;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class CreateBookingDto
{
    private Member member;

    private Place place;

    private LocalDate date;

    private LocalTime startTime;

    private LocalTime endTime;

    public CreateBookingDto(CreateBookingRequest request, Place place, Member member) {
        this.member = member;
        this.place = place;
        this.date = request.getDate();
        this.startTime = request.getStartTime();
        this.endTime = request.getEndTime();
    }
}
