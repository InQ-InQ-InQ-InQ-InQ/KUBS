package com.inq.kbus.domain.member.service;

import com.inq.kbus.domain.member.Member;
import com.inq.kbus.domain.member.dto.CreateMemberDto;
import com.inq.kbus.domain.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {

    private final MemberRepository memberRepository;

    @Transactional
    public Long createMember(CreateMemberDto dto) {

        Member member = Member.createMember(dto);
        memberRepository.save(member);

        return member.getId();
    }
}
