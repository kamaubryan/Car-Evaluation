package com.example.salvagebackend.Controller;

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
    public ResponseEntity<?> getAllImages(@RequestHeader(value = "Authorization") String token) {
        try {
            validateToken(token);
            return ResponseEntity.ok(carImageService.getAllImages());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }

    @PostMapping("/car/{carId}")
    public ResponseEntity<?> addImageToCar(
            @RequestHeader(value = "Authorization") String token,
            @PathVariable Long carId,
            @RequestBody CarImage image) {
        try {
            validateToken(token);
            return ResponseEntity.ok(carImageService.addImageToCar(carId, image));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteImage(@RequestHeader(value = "Authorization") String token, @PathVariable Long id) {
        try {
            validateToken(token);
            carImageService.deleteImage(id);
            return ResponseEntity.ok("Image deleted successfully");
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

