package com.example.salvagebackend.Services;

import com.example.salvagebackend.Entity.User;
import com.example.salvagebackend.Repository.UserRepo;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepo userRepo;

    public  CustomUserDetailsService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        User user = userRepo.findByEmail(email).orElseThrow(() ->
                new UsernameNotFoundException(String.format("User with email %s not found", email)));
        // Replace with your own logic to load user from the database
       // if ("testuser".equals(username)) {
        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getEmail())
                .password(user.getPassword())
                .roles(user.getRole())  // Add this line
                .accountExpired(!user.isAccountNonExpired())
                .accountLocked(!user.isAccountNonLocked())
                .credentialsExpired(!user.isCredentialsNonExpired())
                .disabled(!user.isEnabled())
                .build();
       // }

//        else {
//            throw new UsernameNotFoundException("User not found");
//        }
    }
}
