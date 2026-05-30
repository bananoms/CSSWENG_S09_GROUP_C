package com.cssweng.reportbuilder.repository;

import com.cssweng.reportbuilder.domain.ReportTemplate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.UUID;
import java.util.List;

@Repository
public interface ReportTemplateRepository extends JpaRepository<ReportTemplate, UUID> {
    
    // Instantly retrieve all WYSIWYG layouts belonging to a specific school
    List<ReportTemplate> findBySchoolId(UUID schoolId);
}