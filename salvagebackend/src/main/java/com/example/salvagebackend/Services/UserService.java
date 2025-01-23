package com.example.salvagebackend.Services;

import com.example.salvagebackend.DTO.UserDto;
import com.example.salvagebackend.Entity.User;
import com.example.salvagebackend.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepo myUserRepo;


    // getting all users
    public List<User> getAllUsers() {
        return myUserRepo.findAll();
    }

    // getting the user with the id
    public User getUserById(Long id) {
        return myUserRepo.findById(id).orElseThrow(()-> new RuntimeException("User with this " + id + " does not exist"));
    }
    // saving the car
    public User saveUser(User user) {
        User savedUser = new User();
        savedUser.setUsername(user.getUsername());
        savedUser.setPassword(user.getPassword());
        savedUser.setEmail(user.getEmail());
        savedUser.setFirstName(user.getFirstName());
        savedUser.setLastName(user.getLastName());
        savedUser.setPassword(user.getPassword());
      return   myUserRepo.save(savedUser);
    }
    // updating the existing car

    public User updateUser(Long id , UserDto user) {
        User currentUser = myUserRepo.findById(id).orElseThrow(() -> new RuntimeException("User with this " + id + " does not exist"));
        currentUser.setUsername(user.getUsername());
        currentUser.setFirstName(user.getFirstName());
        currentUser.setLastName(user.getLastName());
        currentUser.setEmail(user.getEmail());
        currentUser.setAddress(user.getAddress());
        return  myUserRepo.save(currentUser);
    }
    // deleting user
    public void deleteUser(Long id) {
      User existingUser = myUserRepo.findById(id).orElseThrow(() -> new RuntimeException("User with this " + id + " does not exist"));
      myUserRepo.delete(existingUser);
    }

    // getting the user by Email
    public Optional<User> getUsersByEmail(String email) {
        Optional<User> emailUsers = myUserRepo.findByEmail(email);
        if (emailUsers.isEmpty()) {
            throw new RuntimeException("User with this " + email + " does not exist");
        }
        return emailUsers;
    }

    // getting by name
    public List<User> getUserByName(String username) {
        List<User> nameUsers = myUserRepo.findByUsername(username);
        if (nameUsers.isEmpty()) {
            throw new RuntimeException("User with this " + username + " does not exist");
        }
        return nameUsers;
    }

    // getting by address

    public List<User> getUserByAddress(String address) {
        List<User> addressUsers = myUserRepo.findByAddress(address);
        if (addressUsers.isEmpty()) {
            throw new RuntimeException("User with this " + address + " does not exist");
        }
        return addressUsers;
    }

    // getting by last name

    public List<User> getUserByPhoneNumber(String phoneNumber) {
        List<User> lastNameUsers = myUserRepo.findByPhoneNumber(phoneNumber);
        if (lastNameUsers.isEmpty()) {
            throw new RuntimeException("User with this " + phoneNumber + " does not exist");
        }
        return lastNameUsers;
    }

}
