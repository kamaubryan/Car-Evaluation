package com.example.salvagebackend.Controller;

import com.example.salvagebackend.Configurations.ApiResponse;
import com.example.salvagebackend.Entity.CarImage;
import com.example.salvagebackend.Services.CarImageService;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/images")
public class CarImageController {
    @Autowired
    private CarImageService carImageService;

    @GetMapping
    public ResponseEntity<ApiResponse<?>> getAllImages(@RequestHeader(value = "Authorization") String token) {
        try {
            validateToken(token);
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Images retrieved successfully",
                    carImageService.getAllImages(),
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

    @PostMapping("/car/{carId}")
    public ResponseEntity<ApiResponse<?>> addImageToCar(
            @RequestHeader(value = "Authorization") String token,
            @PathVariable Long carId,
            @RequestBody CarImage image) {
        try {
            validateToken(token);
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Image added successfully",
                    carImageService.addImageToCar(carId, image),
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

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<?>> deleteImage(
            @RequestHeader(value = "Authorization") String token,
            @PathVariable Long id) {
        try {
            validateToken(token);
            carImageService.deleteImage(id);
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Image deleted successfully",
                    null,
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
