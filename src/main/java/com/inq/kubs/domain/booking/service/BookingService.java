package com.inq.kubs.domain.booking.service;

import com.inq.kubs.domain.booking.Booking;
import com.inq.kubs.domain.booking.dto.CreateBookingDto;
import com.inq.kubs.domain.booking.dto.request.CreateBookingRequest;
import com.inq.kubs.domain.booking.repository.BookingRepository;
import com.inq.kubs.domain.department.Department;
import com.inq.kubs.domain.member.Member;
import com.inq.kubs.domain.member.dto.CreateMemberDto;
import com.inq.kubs.domain.member.repository.MemberRepository;
import com.inq.kubs.domain.place.Place;
import com.inq.kubs.domain.place.repository.PlaceRepository;
import com.inq.kubs.web.exception.ErrorType;
import com.inq.kubs.web.exception.KubsException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;


@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class BookingService
{
    private final BookingRepository bookingRepository;
    private final PlaceRepository placeRepository;
    private final MemberRepository memberRepository;

    @Transactional
    public Booking createBooking(CreateBookingRequest request, Long id){

        //예약 생성 동시성 이슈 해결
        validateNewBooking(request);

        //예약 생성
        Member member = memberRepository.findById(id)
                .orElseThrow(() -> new KubsException(ErrorType.NOT_EXIST_KEY));
        Place place = placeRepository.findById(request.getPlaceId())
                .orElseThrow(() -> new KubsException(ErrorType.NOT_EXIST_KEY));

        CreateBookingDto dto = new CreateBookingDto(request, place, member);

        Booking booking = Booking.createBooking(dto);
        bookingRepository.save(booking);

        return booking;
    }

    public Slice<Booking> getPagedBookings(Long memberId) {
        return bookingRepository.findPagedBookingByMember(memberId, LocalDate.now());
    }

    public Booking getDetailBooking(Long bookingId) {
        return bookingRepository.findWithPlaceById(bookingId)
                .orElseThrow(() -> new KubsException(ErrorType.NOT_EXIST_KEY));
    }

    private void validateNewBooking(CreateBookingRequest request) {
        List<Booking> existBookings = bookingRepository.findByPlaceIdAndDate(request.getPlaceId(), request.getDate());
        LocalTime startTime = request.getStartTime();
        LocalTime endTime = request.getEndTime();
        existBookings.forEach(booking -> {
            LocalTime st = booking.getStartTime();
            LocalTime et = booking.getEndTime();
            if ((startTime.isAfter(st) && startTime.isBefore(et)) || (endTime.isAfter(st) && endTime.isBefore(et))
                    || (startTime.equals(st)) || (endTime.equals(et)) || (startTime.isBefore(st) && endTime.isAfter(st))
                    || (endTime.isAfter(et) && startTime.isBefore(et))) {
                throw new KubsException(ErrorType.CONFLICTED_BOOKING);
            }
        });
    }
}


