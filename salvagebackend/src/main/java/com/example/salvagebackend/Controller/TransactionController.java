package com.example.salvagebackend.Controller;

import com.example.salvagebackend.Configurations.ApiResponse;
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
    public ResponseEntity<ApiResponse<?>> getAllTransactions(@RequestHeader(value = "Authorization") String token) {
        try {
            validateToken(token);
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Transactions retrieved successfully",
                    transactionService.getAllTransactions(),
                    null
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.UNAUTHORIZED.value(),
                    "Unauthorized access",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<?>> getTransactionById(
            @RequestHeader(value = "Authorization") String token,
            @PathVariable Long id) {
        try {
            validateToken(token);
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Transaction retrieved successfully",
                    transactionService.getTransactionById(id),
                    null
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.UNAUTHORIZED.value(),
                    "Unauthorized access",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.UNAUTHORIZED);
        }
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<ApiResponse<?>> updateTransactionStatus(
            @RequestHeader(value = "Authorization") String token,
            @PathVariable Long id,
            @RequestParam String paymentStatus) {
        try {
            validateToken(token);
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Transaction status updated successfully",
                    transactionService.updateTransactionStatus(id, paymentStatus),
                    null
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.UNAUTHORIZED.value(),
                    "Unauthorized access",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.UNAUTHORIZED);
        }
    }

    private void validateToken(String token) {
        if (token == null || !token.startsWith("Bearer ")) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid token format");
        }
    }
}