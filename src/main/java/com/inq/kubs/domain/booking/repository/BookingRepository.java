package com.inq.kubs.domain.booking.repository;

import com.inq.kubs.domain.booking.Booking;
import com.inq.kubs.domain.place.Area;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    @Query("select b from Booking b join fetch b.place p " +
            "where p.area = :area and b.date = :date")
    List<Booking> findByAreaAndDate(@Param("area") Area area, @Param("date") LocalDate date);

    @Query("select b from Booking b join fetch b.place p " +
            "where p.id = :placeId and b.date = :date")
    List<Booking> findByPlaceIdAndDate(@Param("placeId") Long placeId, @Param("date") LocalDate date);
}
