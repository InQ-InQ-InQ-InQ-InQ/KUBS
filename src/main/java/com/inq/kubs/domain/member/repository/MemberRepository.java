package com.inq.kubs.domain.member.repository;

import com.inq.kubs.domain.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {


}
