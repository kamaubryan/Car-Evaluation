package com.example.salvagebackend.DTO;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class UserDto implements Serializable {
    private String email;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String username;
    private String address;
    private String name;
}
