package com.example.salvagebackend.Controller;

import com.example.salvagebackend.DTO.UserDto;
import com.example.salvagebackend.Entity.User;
import com.example.salvagebackend.Repository.UserRepo;
import com.example.salvagebackend.Utilities.JWTUtility;
import com.example.salvagebackend.dto.LoginRequest;
import com.example.salvagebackend.Configurations.ApiResponse;
import com.example.salvagebackend.enums.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    @Autowired
    private UserRepo userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    private final JWTUtility jwtUtility;

    public AuthController(JWTUtility jwtUtility) {
        this.jwtUtility = jwtUtility;
    }

    @GetMapping("/hello")
    public  String sayHello() {
        return "Hello";
    }


    @PostMapping("/register")
    public ResponseEntity<ApiResponse<?>> registerUser(@RequestBody UserDto user) {
        try {
            // Check if user already exists
            if (userRepository.findByEmail(user.getEmail()).isPresent()) {
                ApiResponse<String> response = new ApiResponse<>(
                        HttpStatus.BAD_REQUEST.value(),
                        "User with this email already exists",
                        null,
                        null
                );
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }

            User newUser = new User();
            newUser.setAddress(user.getAddress());
            newUser.setEmail(user.getEmail());
            newUser.setPassword(passwordEncoder.encode(user.getPassword()));
            newUser.setFirstName(user.getFirstName());
            newUser.setLastName(user.getLastName());
            newUser.setPhoneNumber(user.getPhoneNumber());
            newUser.setUsername(user.getUsername());

            // Set default role if none provided
            String role = (user.getRole() != null) ? user.getRole().toUpperCase() : UserRole.USER.name();

            // Validate role
            try {
                UserRole.valueOf(role);
            } catch (IllegalArgumentException e) {
                ApiResponse<String> response = new ApiResponse<>(
                        HttpStatus.BAD_REQUEST.value(),
                        "Invalid role specified",
                        null,
                        null
                );
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }

            newUser.setRole(role);

            userRepository.save(newUser);

            ApiResponse<User> response = new ApiResponse<>(
                    HttpStatus.CREATED.value(),
                    "User registered successfully",
                    newUser,
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

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<?>> loginUser(@RequestBody LoginRequest loginRequest) {
        try {
            User user = userRepository.findByEmail(loginRequest.getEmail())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid credentials"));

            // Invalid password - should return 401 Unauthorized
            if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid credentials");
            }


            // If authentication is successful, generate the token and respond with 200
            String token = jwtUtility.generateJWT((user.getEmail()));
            Map<String, String> userDetails = new HashMap<>();
            userDetails.put("token", token);
            userDetails.put("FirstName", user.getFirstName());
            userDetails.put("LastName", user.getLastName());

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
