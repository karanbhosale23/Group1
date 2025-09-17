package com.example.gstapp.service;

import com.example.gstapp.repository.InvoiceRepository;
import com.example.gstapp.repository.ExpenseRepository;
import com.example.gstapp.dto.ReportDTO;
import com.example.gstapp.model.Expense;
import com.example.gstapp.model.Invoice;

import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;

@Service
public class ReportService {
    private final InvoiceRepository invoiceRepository;
    private final ExpenseRepository expenseRepository;

    public ReportService(InvoiceRepository invoiceRepository, ExpenseRepository expenseRepository) {
        this.invoiceRepository = invoiceRepository;
        this.expenseRepository = expenseRepository;
    }

    public ReportDTO getProfitLoss(Long userId, LocalDate from, LocalDate to) {
        var invoices = invoiceRepository.findByUserIdAndDateBetween(userId, from, to);
        var expenses = expenseRepository.findByUserIdAndDateBetween(userId, from, to);

        BigDecimal totalIncome = invoices.stream()
                .filter(i -> i.getStatus() == Invoice.InvoiceStatus.PAID)
                .map(Invoice::getTotalAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal totalExpense = expenses.stream()
                .map(Expense::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        ReportDTO report = new ReportDTO();
        report.setTotalIncome(totalIncome);
        report.setTotalExpense(totalExpense);
        report.setNetProfit(totalIncome.subtract(totalExpense));
        return report;
    }
}
