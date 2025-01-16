package com.example.salvagebackend.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Entity

public class Parts extends BaseEntity {

@ManyToOne
private Car inventory;
private String name;
private String description;
private String  conditionGrade;
 private BigDecimal price;
private Integer quantity;

 public Car getInventory() {
  return inventory;
 }

 public void setInventory(Car inventory) {
  this.inventory = inventory;
 }

 public String getName() {
  return name;
 }

 public void setName(String name) {
  this.name = name;
 }

 public String getDescription() {
  return description;
 }

 public void setDescription(String description) {
  this.description = description;
 }

 public String getConditionGrade() {
  return conditionGrade;
 }

 public void setConditionGrade(String conditionGrade) {
  this.conditionGrade = conditionGrade;
 }

 public BigDecimal getPrice() {
  return price;
 }

 public void setPrice(BigDecimal price) {
  this.price = price;
 }

 public Integer getQuantity() {
  return quantity;
 }

 public void setQuantity(Integer quantity) {
  this.quantity = quantity;
 }
}
