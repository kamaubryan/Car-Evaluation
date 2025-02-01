package com.example.salvagebackend.Controller;

import com.example.salvagebackend.Configurations.ApiResponse;
import com.example.salvagebackend.DTO.CarDto;
import com.example.salvagebackend.Entity.Car;
import com.example.salvagebackend.Services.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cars")
public class CarController {

    @Autowired
    private CarService carService;


    @PostMapping("/sayhello")
    public  String hello(){
        return "Hello World";
    }

    // Saving the car for the first time
    @PostMapping
    public ResponseEntity<?> createCar(@RequestBody CarDto car) {
        try {
            Car savedCar = carService.saveCar(car);
            System.out.println("Car saved: " + savedCar);
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "New car created successfully",
                   savedCar ,
                    null
            );
            return ResponseEntity.ok(response);

        } catch (ResponseStatusException e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    e.getStatusCode().value(),
                    e.getReason(),
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, e.getStatusCode());
        }
        catch (Exception e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "An unexpected error occurred during a request",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    // Getting all the cars
    @GetMapping
    public ResponseEntity<List<Car>> findCars() {
        try {
            List<Car> allCars = carService.getAllCars();
            return new ResponseEntity<>(allCars, HttpStatus.OK);
        } catch (Exception e) {
            throw new RuntimeException("Error retrieving cars", e);
        }
    }

    // Getting the car with ID
    @GetMapping("/{id}")
    public ResponseEntity<Car> findCarById(@PathVariable Long id) {
        try {
            Car car = carService.getCarById(id);
            return new ResponseEntity<>(car, HttpStatus.OK);
        } catch (Exception e) {
            throw new RuntimeException("Car with ID " + id + " does not exist", e);
        }
    }

    // Updating the car
    @PutMapping("/{id}")
    public ResponseEntity<Car> updateCar(@PathVariable Long id, @RequestBody CarDto car) {
        try {
            Car updatedCar = carService.updateCar(id,car);
            return new ResponseEntity<>(updatedCar, HttpStatus.OK);
        } catch (Exception e) {
            throw new RuntimeException("Error updating car: " + car, e);
        }
    }

    // Deleting the car by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCarById(@PathVariable Long id) {
        try {
            carService.deleteCarById(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            throw new RuntimeException("Car with ID " + id + " does not exist", e);
        }
    }

    // Getting cars by model
    @GetMapping("/model")
    public ResponseEntity<List<Car>> findCarsByModel(@RequestParam String model) {
        try {
            List<Car> modelCars = carService.getCarByModel(model);
            return new ResponseEntity<>(modelCars, HttpStatus.OK);
        } catch (Exception e) {
            throw new RuntimeException("Cars with model " + model + " do not exist", e);
        }
    }

    // Getting cars by year
    @GetMapping("/year")
    public ResponseEntity<List<Car>> findCarsByYear(@RequestParam Integer year) {
        try {
            List<Car> yearCars = carService.getCarByYear(year);
            return new ResponseEntity<>(yearCars, HttpStatus.OK);
        } catch (Exception e) {
            throw new RuntimeException("Cars with year " + year + " do not exist", e);
        }
    }

    // Getting cars by mileage
    @GetMapping("/mileage")
    public ResponseEntity<List<Car>> findByMileage(@RequestParam Integer mileage) {
        try {
            List<Car> mileageCars = carService.getCarByMileage(mileage);
            return new ResponseEntity<>(mileageCars, HttpStatus.OK);
        } catch (Exception e) {
            throw new RuntimeException("Cars with mileage " + mileage + " do not exist", e);
        }
    }

    // Getting cars by make
    @GetMapping("/make")
    public ResponseEntity<List<Car>> findCarsByMake(@RequestParam String make) {
        try {
            List<Car> makeCars = carService.getCarByMake(make);
            return new ResponseEntity<>(makeCars, HttpStatus.OK);
        } catch (Exception e) {
            throw new RuntimeException("Cars with make " + make + " do not exist", e);
        }
    }
}
