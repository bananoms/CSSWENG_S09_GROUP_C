package com.cssweng.reportbuilder.repository;

import com.cssweng.reportbuilder.domain.School;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.UUID;

@Repository
public interface SchoolRepository extends JpaRepository<School, UUID> {
    // Basic CRUD operations are automatically build by Spring Boot
    // no need for any implementation code here
}