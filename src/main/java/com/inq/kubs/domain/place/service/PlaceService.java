package com.inq.kubs.domain.place.service;

import com.inq.kubs.domain.booking.Booking;
import com.inq.kubs.domain.booking.repository.BookingRepository;
import com.inq.kubs.domain.place.dto.request.PreBookingRequest;
import com.inq.kubs.domain.place.Place;
import com.inq.kubs.domain.place.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalTime;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PlaceService {

    private final PlaceRepository placeRepository;
    private final BookingRepository bookingRepository;

    public List<Place> getAblePlaceList(PreBookingRequest request) {

        List<Place> places = placeRepository.findByArea(request.getArea());
        List<Booking> bookings = bookingRepository.findByAreaAndDate(request.getArea(), request.getDate());
        LocalTime startTime = request.getStartTime();
        LocalTime endTime = request.getEndTime();

        filterAblePlaces(places, bookings, startTime, endTime);

        return places;
    }

    private void filterAblePlaces(List<Place> places, List<Booking> bookings, LocalTime startTime, LocalTime endTime) {
        bookings.forEach(booking -> {
            LocalTime st = booking.getStartTime();
            LocalTime et = booking.getEndTime();
            if ((startTime.isAfter(st) && startTime.isBefore(et)) || (endTime.isAfter(st) && endTime.isBefore(et))
                    || (startTime.equals(st)) || (endTime.equals(et)) || (startTime.isBefore(st) && endTime.isAfter(st))
                    || (endTime.isAfter(et) && startTime.isBefore(et))) {
                Long placeId = booking.getPlace().getId();
                places.forEach(place -> {
                    if (place.getId().equals(placeId)) {
                        place.disAble();
                    }
                });
            }
        });
    }
}
