package com.example.salvagebackend.Controller;

import com.example.salvagebackend.DTO.UserDto;
import com.example.salvagebackend.Entity.User;
import com.example.salvagebackend.Repository.UserRepo;
import com.example.salvagebackend.Utilities.JWTUtility;
import com.example.salvagebackend.dto.LoginRequest;
import com.example.salvagebackend.Configurations.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthController {

    @Autowired
    private UserRepo userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    private final JWTUtility jwtUtility;

    public AuthController(JWTUtility jwtUtility) {
        this.jwtUtility = jwtUtility;
    }



    @PostMapping("/api/v1/auth/register")
    public ResponseEntity<ApiResponse<String>> registerUser(@RequestBody UserDto user) {
        try {
            User existingUser = new User();
            existingUser.setEmail(user.getEmail());
            existingUser.setPassword(passwordEncoder.encode(user.getPassword()));
            existingUser.setFirstName(user.getFirstName());
            existingUser.setUsername(user.getUsername());
            existingUser.setPhoneNumber(user.getPhoneNumber());
         existingUser.setRole(user.getRole());
         existingUser.setCreatedAt(user.getCreatedAt());
         existingUser.setUpdatedAt(user.getUpdatedAt());

            userRepository.save(existingUser);

            ApiResponse<String> response = new ApiResponse<>(
                    HttpStatus.CREATED.value(),
                    "User registered successfully",
                    null,
                    null
            );
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "An unexpected error occurred during registration",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/api/v1/auth/login")
    public ResponseEntity<ApiResponse<?>> loginUser(@RequestBody LoginRequest loginRequest) {
        try {
            User user = userRepository.findByEmail(loginRequest.getEmail())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid credentials"));

            // Invalid password - should return 401 Unauthorized
            if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid credentials");
            }

            // If authentication is successful, generate the token and respond with 200
            String token = jwtUtility.generateJWT(user.getUsername());
            Map<String, String> userDetails = new HashMap<>();
            userDetails.put("token", token);
            userDetails.put("FirstName", user.getFirstName());
   userDetails.put("Email", user.getEmail());
   userDetails.put("Role", String.valueOf(user.getRole()));

            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Login successful",
                    userDetails,
                    null
            );
            return ResponseEntity.ok(response);

        } catch (ResponseStatusException e) {
            // Handle specific exceptions with appropriate status codes
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    e.getStatusCode().value(),
                    e.getReason(),
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, e.getStatusCode());
        } catch (Exception e) {
            // Handle any unexpected errors with 500 status code
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "An unexpected error occurred during login",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
