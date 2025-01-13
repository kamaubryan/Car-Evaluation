package com.example.salvagebackend.Entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

// this is for the basic information of the car
@Entity
public  abstract class BaseEntity {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

// local date amd time
    @Column(updatable  = false)
    private LocalDateTime creationDate;
    private LocalDateTime updateDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public LocalDateTime getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(LocalDateTime updateDate) {
        this.updateDate = updateDate;
    }

    // when its created
    @PrePersist
    protected void onCreate() {
        creationDate = LocalDateTime.now();
        updateDate = LocalDateTime.now();
    }
    // when its being updated

    @PreUpdate
    protected void onUpdate() {
        updateDate = LocalDateTime.now();
    }
}
