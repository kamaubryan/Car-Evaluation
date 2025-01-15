package com.example.salvagebackend.DTO;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.math.BigDecimal;

@Getter
@Setter
public class PartDto implements Serializable {
    private String name;
    private String description;
    private String  conditionGrade;
    private BigDecimal price;
    private Integer quantity;

}
