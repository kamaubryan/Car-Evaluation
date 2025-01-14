package com.example.salvagebackend.Entity;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
public class Parts extends BaseEntity {

@ManyToOne
private CarInventory inventory;
private String name;
private String description;
private String  conditionGrade;
private BigDecimal price;
private Integer quantity;

//@Enumerated(EnumType.STRING)
//    private PartStatus status = PartStatus.Available;

}
