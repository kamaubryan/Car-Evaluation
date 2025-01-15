package com.example.salvagebackend.Repository;

import com.example.salvagebackend.DTO.CarDto;
import com.example.salvagebackend.DTO.CarDto;
import com.example.salvagebackend.Entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepo extends JpaRepository<Car, Long> {
  List<Car> findByMake(String make);
  List<Car> findByModel(String model);
  List<Car> findByYear(String year);
  List<Car> findByMileage(String mileage);
}
