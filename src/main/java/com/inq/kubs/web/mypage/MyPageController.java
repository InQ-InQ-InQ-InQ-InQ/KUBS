package com.inq.kubs.web.mypage;


import com.inq.kubs.domain.booking.Booking;
import com.inq.kubs.domain.booking.service.BookingService;
import com.inq.kubs.domain.member.Member;
import com.inq.kubs.domain.member.service.MemberService;
import com.inq.kubs.web.common.consts.SessionConst;
import com.inq.kubs.web.login.dto.MemberSessionDto;
import com.inq.kubs.web.mypage.reponse.MyPageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class MyPageController {

    private final BookingService bookingService;
    private final MemberService memberService;

    @GetMapping("/my_page")
    public ResponseEntity<MyPageResponse> getMyPage(@SessionAttribute(SessionConst.LOGIN_MEMBER)
                                                    MemberSessionDto sessionDto) {

        Member member = memberService.getMemberWithDepartment(sessionDto.getId());
        Slice<Booking> pagedBookings = bookingService.getPagedBookings(sessionDto.getId());
        MyPageResponse myPageResponse = new MyPageResponse(member, pagedBookings);

        return new ResponseEntity<>(myPageResponse, HttpStatus.OK);
    }
}
