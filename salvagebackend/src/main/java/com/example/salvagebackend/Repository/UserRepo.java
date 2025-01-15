package com.example.salvagebackend.Repository;


import com.example.salvagebackend.DTO.UserDto;

import com.example.salvagebackend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
List<User> findByUsername(String username);
List<User> findByEmail(String email);
List<User> findByPhoneNumber(String pnumber);
List<User> findByAddress(String address);
}
