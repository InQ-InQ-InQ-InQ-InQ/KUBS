package com.inq.kbus.domain.member.repository;

import com.inq.kbus.domain.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {


}
