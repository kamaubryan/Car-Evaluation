package com.example.salvagebackend.Services;

import com.example.salvagebackend.DTO.CarDto;
import com.example.salvagebackend.Entity.Car;
import com.example.salvagebackend.Repository.CarRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {
    @Autowired
    CarRepo mycarRepo;

    // getting all cars
    public List<CarDto> getAllCars(){
        return mycarRepo.findAll();
    }

    //getting by Id


}
