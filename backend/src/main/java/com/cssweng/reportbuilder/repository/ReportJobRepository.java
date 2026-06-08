package com.cssweng.reportbuilder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cssweng.reportbuilder.model.ReportJob;

import java.util.UUID;
import java.util.List;

@Repository
public interface ReportJobRepository extends JpaRepository<ReportJob, UUID> {
    
    // Look up jobs filtered by status (e.g., check all "FAILED" or "PENDING" jobs)
    List<ReportJob> findByStatus(String status);
}
