package com.example.salvagebackend.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Getter
@Setter
public class Parts extends BaseEntity {

@ManyToOne
private Car inventory;
private String name;
private String description;
private String  conditionGrade;
private BigDecimal price;
private Integer quantity;

//@Enumerated(EnumType.STRING)
//    private PartStatus status = PartStatus.Available;

}
