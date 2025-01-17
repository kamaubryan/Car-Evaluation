package com.example.salvagebackend.Controller;

import com.example.salvagebackend.DTO.CarDto;
import com.example.salvagebackend.Entity.Car;
import com.example.salvagebackend.Services.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class CarController {
    // creating a subclass of the service
    @Autowired
    private CarService carService;
    // saving the car for the first time
@PostMapping("/v1/cars")
    public ResponseEntity<Car> createCar(@RequestBody CarDto car) {
    try {
        Car savedCar = carService.saveCar(car);
        System.out.println("Car saved: " + savedCar);
        return new ResponseEntity<Car>(savedCar, HttpStatus.CREATED);
    }
    catch (Exception e){
        throw new RuntimeException("this " + car + " does not exist", e);
    }
}

// getting all  the cars

    @GetMapping("/v1/")
    public ResponseEntity<List<CarDto>> findCars(@RequestBody List<CarDto> cars) {
    try {
      List<Car> allCars = carService.getAllCars();
      return new ResponseEntity<>(cars, HttpStatus.FOUND);
    }
    catch (Exception e){
        throw new RuntimeException("this " + cars + " does not exist", e);
    }
    }
    //getting the car with id
    @GetMapping("/v1/cars/{id}")
public ResponseEntity<Car> findCarById(@PathVariable Long id) {
    try {
        Car car = carService.getCarById(id);
        return new ResponseEntity<>(car, HttpStatus.FOUND);
    }
    catch (Exception e){
        throw new RuntimeException("this " + id + " does not exist", e);
    }
    }
    // updating the car
@PutMapping("/v1/cars/car")
    public ResponseEntity<Car> updateCar(@RequestBody CarDto car) {
    try {
        Car savedCar = carService.saveCar(car);
        return new ResponseEntity<>(savedCar, HttpStatus.CREATED);
    }
    catch (Exception e){
        throw new RuntimeException("this " + car + " does not exist", e);
    }
}

// deleting the car
    @DeleteMapping("/v1/cars/car")
    public ResponseEntity<Car> deleteCarById(@PathVariable Long id) {
try {
    Car car = carService.getCarById(id);
    return new ResponseEntity<>(car, HttpStatus.OK);
}
catch (Exception e){
    throw new RuntimeException("this car with this " + id + " does not exist", e);
}
    }

    // getting with model
    @GetMapping("/v1/cars/model")
    public ResponseEntity<List<Car>> findCarsByModel(@RequestParam String model) {
    try {
        List<Car> modelCars = carService.getCarByModel(model);
        return new ResponseEntity<>(modelCars, HttpStatus.FOUND);
    }
    catch (Exception e){
        throw new RuntimeException("this " + model + " does not exist", e);
    }
    }
// getting with year
    @GetMapping("/v1/cars/year")
    public ResponseEntity<List<Car>> findCarsByYear(@RequestParam Integer year) {
    try {
        List<Car> modelCars = carService.getCarByYear(year);
        return new ResponseEntity<>(modelCars, HttpStatus.FOUND);
    }
    catch (Exception e){
        throw new RuntimeException("cars with this " + year + " does not exist", e);
    }
    }

    // getting with mileage
    @GetMapping("/v1/cars/mileage")
    public ResponseEntity<List<Car>> findByMileage(@RequestParam Integer mileage) {
        try {
            List<Car> modelCars = carService.getCarByMileage(mileage);
            return new ResponseEntity<>(modelCars, HttpStatus.FOUND);
        } catch (Exception e) {
            throw new RuntimeException("cars with this " + mileage + " does not exist", e);
        }
    }
    // getting with make
    @GetMapping("/v1/cars/make")
    public ResponseEntity<List<Car>> findCarsByMake(@RequestParam String make) {
    try {
        List<Car> modelCars = carService.getCarByMake(make);
        return new ResponseEntity<>(modelCars, HttpStatus.FOUND);
    }
    catch (Exception e){
        throw new RuntimeException("cars with this " + make + " does not exist", e);
    }
    }

}
