package com.inq.kubs.domain.booking;

import com.inq.kubs.domain.booking.dto.CreateBookingDto;
import com.inq.kubs.domain.member.Member;
import com.inq.kubs.domain.place.Place;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity @Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "place_id")
    private Place place;

    private LocalDate date;

    private LocalTime startTime;

    private LocalTime endTime;

    //편의 메서드
    public Booking(CreateBookingDto dto)
    {
        this.member = dto.getMember();
        this.place = dto.getPlace();
        this.date = dto.getDate();
        this.startTime = dto.getStartTime();
        this.endTime = dto.getEndTime();
    }

    //생성 메서드
    public static Booking createBooking(CreateBookingDto dto) {
        return new Booking(dto);
    }
}
