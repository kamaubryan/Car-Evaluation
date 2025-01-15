package com.example.salvagebackend.DTO;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.math.BigDecimal;
//@Entity
@Getter
@Setter
public class CarDto  implements Serializable {
    private String title;
    private BigDecimal sellingPrice;
    private String damageDescription;
    private String make;
    private String model;
    private Integer year;
    private Integer mileage;
    private String vehicleCondition;
}
