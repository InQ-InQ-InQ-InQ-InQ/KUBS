package com.inq.kubs.domain.booking.repository;

import com.inq.kubs.domain.booking.Booking;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.EntityGraph;
import com.inq.kubs.domain.place.enums.Area;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    @Query("select b from Booking b join fetch b.place p " +
            "where p.area = :area and b.date = :date")
    List<Booking> findByAreaAndDate(@Param("area") Area area, @Param("date") LocalDate date);

    /*fetch join 을 하지 않아도 booking 은 placeId 를 들고있지만 fetch join 을 하면 뒤에 place 를 조회하는
    로직에서 쿼리를 날리지 않아도 되기 때문에 성능상 fetch join 함 */
    @Query("select b from Booking b join fetch b.place p " +
            "where p.id = :placeId and b.date = :date")
    List<Booking> findByPlaceIdAndDate(@Param("placeId") Long placeId, @Param("date") LocalDate date);

    @Query("select b from Booking b join fetch b.place " +
            "where b.member.id = :memberId and " +
            "b.date >= :now " +
            "order by b.date desc, b.startTime")
    Slice<Booking> findPagedBookingByMember(@Param("memberId") Long memberId, LocalDate now);

    @EntityGraph(attributePaths = "place")
    Optional<Booking> findWithPlaceById(Long id);
}
