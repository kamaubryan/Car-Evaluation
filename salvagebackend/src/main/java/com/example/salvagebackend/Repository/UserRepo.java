package com.example.salvagebackend.Repository;


import com.example.salvagebackend.DTO.UserDto;

import com.example.salvagebackend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository

public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    List<User> findByUsername(String username);

    List<User> findByPhoneNumber(String phoneNumber);
}
