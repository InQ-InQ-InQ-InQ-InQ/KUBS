package com.inq.kubs.web.booking;

import com.inq.kubs.domain.booking.Booking;
import com.inq.kubs.domain.booking.dto.request.CreateBookingRequest;
import com.inq.kubs.domain.booking.service.BookingService;
import com.inq.kubs.web.booking.dto.response.DetailBookingResponse;
import com.inq.kubs.web.booking.dto.response.BookingCreatedResponse;
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
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {
    private final BookingService bookingService;

    @PostMapping("/booking")
    public ResponseEntity<BookingCreatedResponse> createBooking(@RequestBody CreateBookingRequest request,
                                                                @SessionAttribute(value = SessionConst.LOGIN_MEMBER,
                                                                              required = false) MemberSessionDto sessionDto) {
        Booking booking = bookingService.createBooking(request, sessionDto.getId());

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Location", "/api/bookings/" + booking.getId());

        return new ResponseEntity<>(new BookingCreatedResponse(booking), headers, HttpStatus.CREATED);
    }

    @GetMapping("/bookings/{id}")
    public ResponseEntity<DetailBookingResponse> getDetailBooking(@PathVariable Long id,
                                                                  @SessionAttribute(value = SessionConst.LOGIN_MEMBER,
                                                                          required = false) MemberSessionDto sessionDto) {
        Booking booking = bookingService.getDetailBooking(id);
        return new ResponseEntity<>(new DetailBookingResponse(booking,sessionDto.getName()), HttpStatus.OK);
    }
}
