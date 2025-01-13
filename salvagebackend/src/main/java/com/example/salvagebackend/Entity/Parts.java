package com.example.salvagebackend.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.ManyToOne;

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
