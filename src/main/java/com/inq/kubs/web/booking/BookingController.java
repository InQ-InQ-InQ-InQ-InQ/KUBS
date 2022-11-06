package com.inq.kubs.web.booking;

import com.inq.kubs.domain.booking.dto.request.CreateBookingRequest;
import com.inq.kubs.domain.booking.service.BookingService;
import com.inq.kubs.web.booking.dto.response.SimpleBookingCreatedResponse;
import com.inq.kubs.web.common.consts.SessionConst;
import com.inq.kubs.web.login.dto.MemberSessionDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class BookingController
{
    private final BookingService bookingService;

    @PostMapping("/booking")
    public ResponseEntity<SimpleBookingCreatedResponse> createBooking(@ModelAttribute CreateBookingRequest request,
                                                                      @SessionAttribute (value = SessionConst.LOGIN_MEMBER,
                                                                              required = false) MemberSessionDto sessionDto) {
        Long bookingId = bookingService.createBooking(request, sessionDto.getStudentId());

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Location", "/api/bookings/" + bookingId);

        return new ResponseEntity<>(new SimpleBookingCreatedResponse(true, bookingId), headers, HttpStatus.CREATED);
    }
}
