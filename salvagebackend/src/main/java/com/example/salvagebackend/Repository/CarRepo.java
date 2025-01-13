package com.example.salvagebackend.Repository;

import com.example.salvagebackend.Entity.CarInventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepo extends JpaRepository<CarInventory, Long> {

}
