package com.cssweng.reportbuilder;

import com.cssweng.reportbuilder.model.School;
import com.cssweng.reportbuilder.repository.SchoolRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class SchoolRepositorySmokeTest {

    @Autowired
    private SchoolRepository schoolRepository;

    @Test
    void confirmReadWriteWorks() {
        School testSchool = new School();
        testSchool.setName("De La Salle University - Smoke Test");
        testSchool.setCode("DLSU-SMOKE");

        // Write
        School savedSchool = schoolRepository.save(testSchool);
        assertThat(savedSchool.getId()).isNotNull();

        // Read
        Optional<School> retrievedSchool = schoolRepository.findById(savedSchool.getId());

        assertThat(retrievedSchool).isPresent();
        assertThat(retrievedSchool.get().getName()).isEqualTo("De La Salle University - Smoke Test");
        assertThat(retrievedSchool.get().getCode()).isEqualTo("DLSU-SMOKE");

        //Clean-up commented out to check
        // schoolRepository.delete(savedSchool);
    }
}