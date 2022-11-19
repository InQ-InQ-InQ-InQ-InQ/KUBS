package com.inq.kubs.domain.member.repository;

import com.inq.kubs.domain.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findByStudentId(Long studentId);
}
