package com.inq.kubs.web.booking.dto.response;

import com.inq.kubs.domain.booking.Booking;
import lombok.Data;
import org.springframework.data.domain.Slice;

import java.util.ArrayList;
import java.util.List;
@Data
public class DetailBookingResponse {

    private boolean hasNext;

    private List<DetailBooking> bookings = new ArrayList<>();

    public DetailBookingResponse(Slice<Booking> slicedBookings) {
        this.hasNext = slicedBookings.hasNext();
        this.bookings = slicedBookings.map(DetailBooking::new)
                .getContent();
    }
}