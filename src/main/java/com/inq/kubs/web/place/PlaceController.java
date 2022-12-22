package com.inq.kubs.web.place;

import com.inq.kubs.domain.place.service.PlaceService;
import com.inq.kubs.domain.place.dto.request.PreBookingRequest;
import com.inq.kubs.domain.place.Place;
import com.inq.kubs.web.place.dto.response.PlaceResponse;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
public class PlaceController {

    private final PlaceService placeService;

    @PostMapping("/place/ablePlaceList")
    @Operation(summary = "예약 가능한 장소 조회", description = "강의동, 날짜, 시작시간, 사용시간을 입력받아 해당 강의동, 날짜, 시간에 예약가능한 장소를 조회한다.")
    public ResponseEntity<List<PlaceResponse>> getAblePlaceList(@RequestBody PreBookingRequest request) {

        log.info("request = {}", request);
        List<Place> ablePlaceList = placeService.getAblePlaceList(request);
        List<PlaceResponse> result = ablePlaceList.stream().map(PlaceResponse::new).collect(Collectors.toList());

        return new ResponseEntity<>(result, HttpStatus.OK);
        // 로그인한 사용자면, 세션에 로그인한 사용자의 정보를 받죠!
    }
}
