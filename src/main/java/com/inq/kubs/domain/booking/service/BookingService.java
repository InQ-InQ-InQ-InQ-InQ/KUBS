package com.inq.kubs.domain.booking.service;

import com.inq.kubs.domain.booking.Booking;
import com.inq.kubs.domain.booking.dto.CreateBookingDto;
import com.inq.kubs.domain.booking.dto.request.CreateBookingRequest;
import com.inq.kubs.domain.booking.repository.BookingRepository;
import com.inq.kubs.domain.department.Department;
import com.inq.kubs.domain.member.Member;
import com.inq.kubs.domain.member.dto.CreateMemberDto;
import com.inq.kubs.web.exception.ErrorType;
import com.inq.kubs.web.exception.KubsException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class BookingService
{

    private final BookingRepository bookingRepository;

    @Transactional
    public Long createBooking(CreateBookingRequest request, Long studentId)
    {
        CreateBookingDto dto = new CreateBookingDto(request, 여기서! 멤버아이디를!?);
        dto.registerDepartment(department);
        Member member = Member.createMember(dto);
        memberRepository.save(member);
    }

    /*@Transactional
    public Long createMember(CreateMemberRequest request) {

        Department department = departmentRepository.findById(request.getDepartmentId())
                .orElseThrow(() -> new KubsException(ErrorType.NOT_EXIST_KEY));

        CreateMemberDto dto = new CreateMemberDto(request);
        dto.registerDepartment(department);
        Member member = Member.createMember(dto);
        memberRepository.save(member);

        return member.getId();*/
}


