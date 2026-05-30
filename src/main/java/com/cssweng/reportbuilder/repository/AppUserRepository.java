package com.cssweng.reportbuilder.repository;

import com.cssweng.reportbuilder.domain.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.UUID;
import java.util.List;

@Repository
public interface AppUserRepository extends JpaRepository<AppUser, UUID> {
    
    // Custom query method example: Spring handles the SQL generation automatically based on the name!
    List<AppUser> findBySchoolId(UUID schoolId);
}