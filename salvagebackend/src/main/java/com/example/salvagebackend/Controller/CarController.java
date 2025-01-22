package com.example.salvagebackend.Controller;

import com.example.salvagebackend.Configurations.ApiResponse;
import com.example.salvagebackend.DTO.CarDto;
import com.example.salvagebackend.Entity.Car;
import com.example.salvagebackend.Services.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cars")
public class CarController {

    @Autowired
    private CarService carService;

    @GetMapping("/hello")
    public String hello() {
        return "Hello World";
    }

    // Getting the car with ID
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<?>> findCarById(@PathVariable Long id) {
        try {
            Car car = carService.getCarById(id);
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Car retrieved successfully",
                    car,
                    null
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Error retrieving car",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Updating the car
    @PutMapping
    public ResponseEntity<ApiResponse<?>> updateCar(@RequestBody CarDto car) {
        try {
            Car updatedCar = carService.saveCar(car);
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Car updated successfully",
                    updatedCar,
                    null
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Error updating car",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Deleting the car by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<?>> deleteCarById(@PathVariable Long id) {
        try {
            carService.deleteCarById(id);
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Car deleted successfully",
                    null,
                    null
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Error deleting car",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Getting cars by model
    @GetMapping("/model")
    public ResponseEntity<ApiResponse<?>> findCarsByModel(@RequestParam String model) {
        try {
            List<Car> modelCars = carService.getCarByModel(model);
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Cars retrieved successfully",
                    modelCars,
                    null
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Error retrieving cars by model",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Getting cars by year
    @GetMapping("/year")
    public ResponseEntity<ApiResponse<?>> findCarsByYear(@RequestParam Integer year) {
        try {
            List<Car> yearCars = carService.getCarByYear(year);
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Cars retrieved successfully",
                    yearCars,
                    null
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Error retrieving cars by year",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Getting cars by mileage
    @GetMapping("/mileage")
    public ResponseEntity<ApiResponse<?>> findByMileage(@RequestParam Integer mileage) {
        try {
            List<Car> mileageCars = carService.getCarByMileage(mileage);
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Cars retrieved successfully",
                    mileageCars,
                    null
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Error retrieving cars by mileage",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Getting cars by make
    @GetMapping("/make")
    public ResponseEntity<ApiResponse<?>> findCarsByMake(@RequestParam String make) {
        try {
            List<Car> makeCars = carService.getCarByMake(make);
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Cars retrieved successfully",
                    makeCars,
                    null
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Error retrieving cars by make",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}