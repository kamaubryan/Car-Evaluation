package com.example.salvagebackend.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Getter
@Setter
////@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
//@DiscriminatorColumn(name = "car_type", discriminatorType = DiscriminatorType.STRING)
public class Car extends BaseEntity {

  @Column(name = "car_Name")
  private String title;
  private BigDecimal  sellingPrice;
  private String damageDescription;
  private String make;
  private String model;
  @Column(name = "yearOfMake")
  private Integer year;
  private Integer mileage;
  private String vehicleCondition;

//  @Enumerated(EnumType.STRING)
//  private InventoryStatus status = Inventory.Available;
//  private boolean featured;


//  public void setDescriptionDescription(String descriptionDescription) {
//    this.damageDescription = descriptionDescription;
//  }




}
