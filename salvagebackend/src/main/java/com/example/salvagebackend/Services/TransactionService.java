package com.example.salvagebackend.Services;

import com.example.salvagebackend.Entity.Transaction;
import com.example.salvagebackend.Entity.User;
import com.example.salvagebackend.Repository.TransactionRepo;
import com.example.salvagebackend.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService {
    @Autowired
    private TransactionRepo transactionRepository;

    @Autowired
    private UserRepo userRepository;

    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    public List<Transaction> getUserTransactions(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return user.getPurchases();
    }

    public Transaction getTransactionById(Long id) {
        return transactionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Transaction not found"));
    }

    public Transaction updateTransactionStatus(Long id, String paymentStatus) {
        Transaction transaction = getTransactionById(id);
        transaction.setPaymentStatus(paymentStatus);
        return transactionRepository.save(transaction);
    }
}