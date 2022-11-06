package com.inq.kubs.domain.place.repository;

import com.inq.kubs.domain.place.Area;
import com.inq.kubs.domain.place.Place;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PlaceRepository extends JpaRepository<Place, Long> {

    List<Place> findByArea(Area area);
}
