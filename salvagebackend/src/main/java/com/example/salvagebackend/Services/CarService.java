package com.example.salvagebackend.Services;

import com.example.salvagebackend.DTO.CarDto;
import com.example.salvagebackend.Entity.Car;
import com.example.salvagebackend.Repository.CarRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {
    @Autowired
    CarRepo mycarRepo;

public Car car;


    // getting all cars
    public List<Car> getAllCars(){
        return mycarRepo.findAll();
    }

    //getting by Id
public Car getCarById(Long id){
        return mycarRepo.findById(id).orElseThrow(()-> new RuntimeException("this car " + id + " does not exist"));
    }
    // posting the initial details of the vehicle entity
    @Transactional
public Car saveCar(CarDto carDto ){

        Car savedCar = new Car();
        savedCar.setTitle(carDto.getTitle());
        savedCar.setMake(carDto.getMake());
        savedCar.setModel(carDto.getModel());
        savedCar.setYear(carDto.getYear());
        savedCar.setMileage(carDto.getMileage());
        savedCar.setSellingPrice(carDto.getSellingPrice());
        savedCar.setVehicleCondition(carDto.getVehicleCondition());
        savedCar.setDamageDescription(carDto.getDamageDescription());
        return mycarRepo.save(savedCar);
}


    public Car updateCar( Long id ,CarDto carDto){
        Car updatedCar = mycarRepo.findById(id).orElseThrow(()-> new RuntimeException("car with this " +id + " does not exist"));
        updatedCar.setTitle(carDto.getTitle());
        updatedCar.setMake(carDto.getMake());
        updatedCar.setModel(carDto.getModel());
        updatedCar.setYear(carDto.getYear());
        updatedCar.setMileage(carDto.getMileage());
        updatedCar.setSellingPrice(carDto.getSellingPrice());
        updatedCar.setVehicleCondition(carDto.getVehicleCondition());
        updatedCar.setDamageDescription(carDto.getDamageDescription());
        return mycarRepo.save(updatedCar);
    }

    // deleting the existing car
    public void deleteCar(Long id){
        Car existingcar = mycarRepo.findById(id).orElseThrow(()-> new RuntimeException("car with this " +id + " does not exist"));
    mycarRepo.delete(existingcar);}
     //  getting car by make

    public List<Car> getCarByMake(String make) {
        List<Car> makeCars = mycarRepo.findByMake(make);
        if(makeCars.isEmpty()){
            throw new RuntimeException("car with make " + make + " does not exist");
        }
        return makeCars;
    }
// getting car by model
    public List<Car> getCarByModel(String model) {
        List<Car> modelCars = mycarRepo.findByModel(model);
        if(modelCars.isEmpty()){
            throw new RuntimeException("car with make " + model + " does not exist");
        }
        return modelCars;
    }
    // getting by year
    public List<Car> getCarByYear(Integer year) {
        List<Car> carYear = mycarRepo.findByYear(year);
                if(carYear.isEmpty()){
                    throw new RuntimeException("car with year " + year + " does not exist");
                }
                return carYear;
    }
    // getting by mileage
    public List<Car> getCarByMileage(Integer mileage) {
        List<Car> carMileage = mycarRepo.findByMileage(mileage);
      return carMileage;
    }
}


