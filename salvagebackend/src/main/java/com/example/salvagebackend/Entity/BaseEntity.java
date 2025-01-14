package com.example.salvagebackend.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

// this is for the basic information of the car
@MappedSuperclass
@Data
public  class BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime creationDate;
    private LocalDateTime updateDate;


}
