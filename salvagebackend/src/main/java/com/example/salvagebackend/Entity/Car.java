package com.example.salvagebackend.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "CarDetails")
public class Car {
  @Id
    int carid;
}
