package com.example.gstapp.controller;

import com.example.gstapp.service.ReportService;
import com.example.gstapp.dto.ReportDTO;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/v1/reports")
public class ReportController {

    private final ReportService reportService;

    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }

    @GetMapping("/profit-loss")
    public ReportDTO getProfitLoss(
            @RequestParam Long userId,
            @RequestParam LocalDate from,
            @RequestParam LocalDate to) {
        return reportService.getProfitLoss(userId, from, to);
    }
}
