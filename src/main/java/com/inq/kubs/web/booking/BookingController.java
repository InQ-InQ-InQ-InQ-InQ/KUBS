package com.inq.kubs.web.booking;

import com.inq.kubs.web.booking.dto.request.PreBookingRequest;
import com.inq.kubs.web.common.consts.SessionConst;
import com.inq.kubs.web.login.dto.MemberSessionDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class BookingController {

    @GetMapping("/booking/ablePlaceList")
    public ResponseEntity<Void> getAblePlaceList(@ModelAttribute PreBookingRequest request,
                                                 @SessionAttribute(value = SessionConst.LOGIN_MEMBER,
                                                         required = false) MemberSessionDto sessionDto) {

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
