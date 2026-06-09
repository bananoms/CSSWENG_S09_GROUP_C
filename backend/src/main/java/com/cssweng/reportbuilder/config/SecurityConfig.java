package com.cssweng.reportbuilder.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // 1. Disable CSRF protection since we are creating a stateless REST API
            .csrf(csrf -> csrf.disable())
            
            // 2. Configure endpoint authorization rules
            .authorizeHttpRequests(auth -> auth
                // Allow anyone to access the localstack test tools
                .requestMatchers("/api/localstack/**").permitAll()
                // Any other endpoint in the system still requires a valid login
                .anyRequest().authenticated()
            );

        return http.build();
    }
}