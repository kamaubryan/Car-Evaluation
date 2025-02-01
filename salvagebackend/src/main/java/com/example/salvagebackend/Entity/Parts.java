package com.example.salvagebackend.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.util.Date;

@Entity

public class Parts  {
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
 @CreationTimestamp
 @Temporal(TemporalType.TIMESTAMP)
 @Column(name = "created_at", updatable = false)
 private Date createdAt;

 @UpdateTimestamp
 @Temporal(TemporalType.TIMESTAMP)
 @Column(name = "updated_at")
 private Date updatedAt;

 public Date getUpdatedAt() {
  return updatedAt;
 }

 public void setUpdatedAt(Date updatedAt) {
  this.updatedAt = updatedAt;
 }

 public Date getCreatedAt() {
  return createdAt;
 }

 public void setCreatedAt(Date createdAt) {
  this.createdAt = createdAt;
 }

 public Long getId() {
  return id;
 }

 public void setId(Long id) {
  this.id = id;
 }

private String name;
private String description;
private String  conditionGrade;
 private BigDecimal price;
private Integer quantity;

 public String getImageUrl() {
  return imageUrl;
 }

 public void setImageUrl(String imageUrl) {
  this.imageUrl = imageUrl;
 }
@Column(length = 20000)
 private String imageUrl;

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
