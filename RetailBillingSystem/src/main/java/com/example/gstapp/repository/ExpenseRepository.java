package com.example.gstapp.repository;

import com.example.gstapp.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.util.List;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    List<Expense> findByUserIdAndDateBetween(Long userId, LocalDate from, LocalDate to);
}