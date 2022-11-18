package com.inq.kubs.web.booking.dto.response;
import com.inq.kubs.domain.booking.Booking;
import lombok.Data;
import java.time.LocalDate;
import java.time.LocalTime;
@Data
public class DetailBookingResponse {
    //TODO 이렇게 파라미터 다 쪼개서 받으면 파라미터 넘기는것도 힘들고 나중에 수정할때 진짜 노답이라서 여기서는 Booking 을 DetailBookingResponse로 만드는거니까
    //TODO 파라미터로 Booking 을 받아서 하면됩니다. 예시는 SimplePlaceReponse를 보시면 됩니다.
    public DetailBookingResponse(Booking booking, String name) {
        this.name = name;
        this.placeName = booking.getPlace().getPlaceName();
        this.date = booking.getDate();
        this.startTime = booking.getStartTime();
        this.endTime = booking.getEndTime();
    }

    private String name;
    private String placeName;
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;
}