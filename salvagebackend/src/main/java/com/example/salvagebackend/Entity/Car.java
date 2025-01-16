package com.example.salvagebackend.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
public class Car extends BaseEntity {
  public Car() {
  }

  @Column(name = "car_Name")
  public String title;
  public BigDecimal  sellingPrice;
  public String damageDescription;
  public String make;
  public String model;
  @Column(name = "yearOfMake")
  public Integer year;
  public Integer mileage;
  public String vehicleCondition;

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public BigDecimal getSellingPrice() {
    return sellingPrice;
  }

  public void setSellingPrice(BigDecimal sellingPrice) {
    this.sellingPrice = sellingPrice;
  }

  public String getDamageDescription() {
    return damageDescription;
  }

  public void setDamageDescription(String damageDescription) {
    this.damageDescription = damageDescription;
  }

  public String getMake() {
    return make;
  }

  public void setMake(String make) {
    this.make = make;
  }

  public String getModel() {
    return model;
  }

  public void setModel(String model) {
    this.model = model;
  }

  public Integer getYear() {
    return year;
  }

  public void setYear(Integer year) {
    this.year = year;
  }

  public Integer getMileage() {
    return mileage;
  }

  public void setMileage(Integer mileage) {
    this.mileage = mileage;
  }

  public String getVehicleCondition() {
    return vehicleCondition;
  }

  public void setVehicleCondition(String vehicleCondition) {
    this.vehicleCondition = vehicleCondition;
  }
}
