package com.example.gstapp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;
@Configuration
public class CorsConfig {
    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration cors = new CorsConfiguration();
        cors.setAllowCredentials(true);

        // Allow your dev frontend origins
        cors.setAllowedOrigins(Arrays.asList(
                "http://localhost:8081",   // your current frontend
                "http://localhost:19006",  // expo web
                "http://192.168.1.49:19000",
                "http://192.168.1.49:19006"
        ));

        cors.setAllowedHeaders(Arrays.asList("Origin", "Content-Type", "Accept", "Authorization"));
        cors.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", cors);

        return new CorsFilter(source);
    }
}


