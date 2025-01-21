package com.example.salvagebackend.Controller;

import com.example.salvagebackend.Services.TransactionService;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {
    @Autowired
    private TransactionService transactionService;


    @GetMapping
    public ResponseEntity<?> getAllTransactions(@RequestHeader(value = "Authorization") String token) {
        try {
            validateToken(token);
            return ResponseEntity.ok(transactionService.getAllTransactions());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getTransactionById(
            @RequestHeader(value = "Authorization") String token,
            @PathVariable Long id) {
        try {
            validateToken(token);
            return ResponseEntity.ok(transactionService.getTransactionById(id));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<?> updateTransactionStatus(
            @RequestHeader(value = "Authorization") String token,
            @PathVariable Long id,
            @RequestParam String paymentStatus) {
        try {
            validateToken(token);
            return ResponseEntity.ok(transactionService.updateTransactionStatus(id, paymentStatus));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }

    private void validateToken(String token) {
        if (token == null || !token.startsWith("Bearer ")) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid token format");
        }
    }
}