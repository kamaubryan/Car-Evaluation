package com.example.salvagebackend.Entity;


import jakarta.persistence.*;

import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
@Table(name = "user_Data")
public class User extends BaseEntity {

    // the id  also the primary key

//    @Column(updatable = true , nullable = false, name = "Email")
    private String email;

//    @Column(updatable = true, nullable = false, unique = true, name = "Password")
    private String password;

    private String firstName;
//    @Column(name = "L_Name")
    private String lastName;
//    @Column(name = "Phone_number")
    private String phoneNumber;
//    @Column(name = "Address")
    private String address;




}
