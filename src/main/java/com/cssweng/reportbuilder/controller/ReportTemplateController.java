package com.cssweng.reportbuilder.controller;

import com.cssweng.reportbuilder.model.ReportTemplate;
import com.cssweng.reportbuilder.repository.ReportTemplateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
  
import java.util.List;

@RestController
@RequestMapping("/api/templates")
@CrossOrigin(origins = "http://localhost:4200")
public class ReportTemplateController {

    @Autowired
    private ReportTemplateRepository reportTemplateRepository;

    @GetMapping
    public ResponseEntity<List<ReportTemplate>> getAllTemplates() {
        // Fetches all templates from the database and returns a 200 OK response
        List<ReportTemplate> templates = reportTemplateRepository.findAll();
        return ResponseEntity.ok(templates);
    }
}