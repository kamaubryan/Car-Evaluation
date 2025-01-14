package com.example.salvagebackend.Entity;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table
////@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
//@DiscriminatorColumn(name = "car_type", discriminatorType = DiscriminatorType.STRING)
public class CarInventory extends BaseEntity {

  @Column(name = "Car_Name")
  private String title;
  @Column(name = "Selling_Price")
  private BigDecimal  sellingPrice;
  @Column(name = "Damage_Description")
  private String damageDescription;
  @Column(name = "Car_Make")
  private String make;
  @Column(name = "Car_Model")
  private String model;
  @Column(name = "YearOfMake")
  private Integer year;
  @Column(name = "Mileage")
  private Integer mileage;
  @Column(name = "Car_Condition")
  private String vehicleCondition;

//  @Enumerated(EnumType.STRING)
//  private InventoryStatus status = Inventory.Available;
  private boolean featured;

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

  public String getDescriptionDescription() {
    return damageDescription;
  }

  public void setDescriptionDescription(String descriptionDescription) {
    this.damageDescription = descriptionDescription;
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

  public int getYear() {
    return year;
  }

  public void setYear(int year) {
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

  public boolean isFeatured() {
    return featured;
  }

  public void setFeatured(boolean featured) {
    this.featured = featured;
  }
}
