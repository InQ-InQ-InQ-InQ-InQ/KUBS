package com.inq.kubs.web.booking.dto.response;

import com.inq.kubs.domain.booking.Booking;
import com.inq.kubs.web.mypage.reponse.PagedBooking;
import lombok.Data;
import org.springframework.data.domain.Slice;

import java.util.ArrayList;
import java.util.List;

@Data
public class PagedBookingResponse {

    private boolean hasNext;

    private List<PagedBooking> bookings = new ArrayList<>();

    public PagedBookingResponse(Slice<Booking> slicedBookings) {
        this.hasNext = slicedBookings.hasNext();
        this.bookings = slicedBookings.map(PagedBooking::new)
                .getContent();
    }
}
