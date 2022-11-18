package com.inq.kubs.web.booking;

import com.inq.kubs.domain.booking.Booking;
import com.inq.kubs.domain.booking.dto.request.CreateBookingRequest;
import com.inq.kubs.domain.booking.service.BookingService;
import com.inq.kubs.web.booking.dto.response.DetailBookingResponse;
import com.inq.kubs.web.booking.dto.response.PagedBookingResponse;
import com.inq.kubs.web.booking.dto.response.SimpleBookingCreatedResponse;
import com.inq.kubs.web.common.consts.SessionConst;
import com.inq.kubs.web.login.dto.MemberSessionDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class BookingController {
    private final BookingService bookingService;

    @PostMapping("/booking")
    public ResponseEntity<SimpleBookingCreatedResponse> createBooking(@ModelAttribute CreateBookingRequest request,
                                                                      @SessionAttribute(value = SessionConst.LOGIN_MEMBER,
                                                                              required = false) MemberSessionDto sessionDto) {
        Long bookingId = bookingService.createBooking(request, sessionDto.getId());

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Location", "/api/bookings/" + bookingId);

        return new ResponseEntity<>(new SimpleBookingCreatedResponse(true, bookingId), headers, HttpStatus.CREATED);
    }

    @GetMapping("/bookings")
    public ResponseEntity<PagedBookingResponse> getPagedBookings(@SessionAttribute(value = SessionConst.LOGIN_MEMBER,
                                                                        required = false) MemberSessionDto sessionDto,
                                                         Pageable pageable) {
        Slice<Booking> findBookings = bookingService.getPagedBookings(pageable, sessionDto.getId());

        return new ResponseEntity<>(new PagedBookingResponse(findBookings), HttpStatus.OK);
    }

    @GetMapping("/bookings/{id}")
    public ResponseEntity<DetailBookingResponse> getDetailBookings(@SessionAttribute(value = @PathVariable("id") Long id,
                                                                   required = false) MemberSessionDto sessionDto,
                                                                   Pageable pageable) {
        //TODO @SessionAttribute 는 세션에 저장된 회원정보를 받아오는거거든 여기서 @PathVariable을 사용하는건 프론트한테서 Booking 의
        //TODO id 를 받아오는거라서 @PathVariable은 따로 분리돼있어야돼 그리고 @SessionAttribute는 빼도돼 여기서는 쓸일이 없거든
        //TODO 지금 근본적인 문제가 이거 말고 이 로직의 문젠데 이 로직은 하나의 Booking의 id를 받아서 그 id에 해당하는 Booking을 조회해주는 거거든
        //TODO 그래서 내가 만들어둔 로직 쓰면 안되고 너가 새로 만들어야돼 BookingService에다가

        Slice<Booking> findbyIdBookings = bookingService.getPagedBookings(pageable, sessionDto.getId());

        return new ResponseEntity<>(new DetailBookingResponse(findbyIdBookings, HttpStatus.OK);

    }
}
