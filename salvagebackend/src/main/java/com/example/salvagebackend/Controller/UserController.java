package com.example.salvagebackend.Controller;

import com.example.salvagebackend.Configurations.ApiResponse;
import com.example.salvagebackend.DTO.UserDto;
import com.example.salvagebackend.Entity.User;
import com.example.salvagebackend.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public ResponseEntity<ApiResponse<?>> getAllUsers() {
        try {
            List<User> users = userService.getAllUsers();
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Users retrieved successfully",
                    users,
                    null
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Error retrieving users",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Other methods following the same pattern...
}
