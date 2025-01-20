package com.example.salvagebackend.Services;

import com.example.salvagebackend.Entity.Car;
import com.example.salvagebackend.Entity.CarImage;
import com.example.salvagebackend.Repository.CarImageRepo;
import com.example.salvagebackend.Repository.CarRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarImageService {
    @Autowired
    private CarImageRepo carImageRepository;

    @Autowired
    private CarRepo carRepository;

    public List<CarImage> getAllImages() {
        return carImageRepository.findAll();
    }

    public CarImage addImageToCar(Long carId, CarImage image) {
        Car car = carRepository.findById(carId)
                .orElseThrow(() -> new RuntimeException("Car not found"));
        image.setCar(car);
        return carImageRepository.save(image);
    }

    public void deleteImage(Long imageId) {
        carImageRepository.deleteById(imageId);
    }
}