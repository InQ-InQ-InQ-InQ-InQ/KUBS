package com.inq.kubs.web.mypage.reponse;

import com.inq.kubs.domain.booking.Booking;
import com.inq.kubs.domain.member.Member;
import lombok.Data;
import org.springframework.data.domain.Slice;

import java.util.ArrayList;
import java.util.List;

@Data
public class MyPageResponse {

    private String name;
    private Long studentId;
    private String email;
    private String phoneNumber;
    private String departmentName;

    private List<PagedBooking> bookings = new ArrayList<>();

    public MyPageResponse(Member member, Slice<Booking> slicedBookings) {
        this.name = member.getName();
        this.studentId = member.getStudentId();
        this.email = member.getEmail();
        this.phoneNumber = member.getPhoneNumber();
        this.departmentName = member.getDepartment().getDepartmentName();
        this.bookings = slicedBookings.map(PagedBooking::new)
                .getContent();
    }
}
