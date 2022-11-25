package com.inq.kubs.web.place.dto.response;

import com.inq.kubs.domain.place.Place;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@Schema(description = "기본 장소 응답")
public class PlaceResponse {

    @Schema(description = "조회한 장소의 PK")
    private Long id;

    private String placeName;

    public PlaceResponse(Place place) {
        this.id = place.getId();
        this.placeName = place.getPlaceName();
    }
}
