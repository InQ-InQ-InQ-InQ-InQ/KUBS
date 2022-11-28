package com.inq.kubs.web.place.dto.response;

import com.inq.kubs.domain.place.Place;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@Schema(description = "기본 장소 응답")
public class PlaceResponse {

    @Schema(description = "조회한 장소의 PK")
    private Long placeId;

    private String placeName;

    private Integer floor;

    private Boolean isAble;

    public PlaceResponse(Place place) {
        this.placeId = place.getId();
        this.placeName = place.getPlaceName();
        this.floor = place.getFloor();
        this.isAble = place.getIsAble();
    }
}
