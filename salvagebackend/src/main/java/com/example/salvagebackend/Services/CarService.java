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

    // getting all cars
    public List<Car> getAllCars(){
        return mycarRepo.findAll();
    }

    //getting by Id
public Car getCarById(Long id){
        return mycarRepo.findById(id).orElseThrow(()-> new RuntimeException("not found"));
    }
    // posting the initial details of the vehicle entity
    @Transactional
public Car saveCar(Long carId, CarDto carDto ){
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
// updating the car details

    public Car updateCar(CarDto carDto){
        Car car = new Car();
        car.setTitle(carDto.getTitle());
        car.setMake(carDto.getMake());
        car.setModel(carDto.getModel());
        car.setYear(carDto.getYear());
        car.setMileage(carDto.getMileage());
        car.setSellingPrice(carDto.getSellingPrice());
        car.setVehicleCondition(carDto.getVehicleCondition());
        car.setDamageDescription(carDto.getDamageDescription());
        return mycarRepo.save(car);
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
}


