package com.example.salvagebackend.Repository;

import com.example.salvagebackend.Entity.CarImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarImageRepo extends JpaRepository<CarImage, Long> {}
