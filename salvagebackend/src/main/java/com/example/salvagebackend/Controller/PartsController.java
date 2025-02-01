package com.example.salvagebackend.Controller;

import com.example.salvagebackend.DTO.PartDto;
import com.example.salvagebackend.Entity.Parts;
import com.example.salvagebackend.Services.PartsServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/v1/parts")
@CrossOrigin(origins = "*")
public class PartsController {

    @Autowired
    private PartsServices partsServices;

    // Get all parts
    @GetMapping
    public ResponseEntity<?> getAllParts() {
        try {
            List<Parts> parts = partsServices.getAllParts();
            return ResponseEntity.ok(parts);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving parts: " + e.getMessage());
        }
    }

    // Get part by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getPartById(@PathVariable Long id) {
        try {
            Parts part = partsServices.getPartById(id);
            return ResponseEntity.ok(part);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving part by ID: " + e.getMessage());
        }
    }

    // Create new part
    @PostMapping
    public ResponseEntity<?> createPart(@RequestBody PartDto partDto) {
        try {
            Parts part = partsServices.saveParts(partDto);
            return new ResponseEntity<>(part, HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating part: " + e.getMessage());
        }
    }

    // Update part
    @PutMapping("/{id}")
    public ResponseEntity<?> updatePart(@PathVariable Long id, @RequestBody PartDto partDto) {
        try {
            Parts part = partsServices.updateParts(id, partDto);
            return ResponseEntity.ok(part);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating part: " + e.getMessage());
        }
    }

    // Delete part
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePart(@PathVariable Long id) {
        try {
            partsServices.deleteParts(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting part: " + e.getMessage());
        }
    }

    // Get parts by condition grade
    @GetMapping("/condition/{grade}")
    public ResponseEntity<?> getPartsByCondition(@PathVariable String grade) {
        try {
            List<Parts> parts = partsServices.getPartsByConditionGrade(grade);
            return ResponseEntity.ok(parts);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving parts by condition grade: " + e.getMessage());
        }
    }

    // Get parts by name
    @GetMapping("/name/{name}")
    public ResponseEntity<?> getPartsByName(@PathVariable String name) {
        try {
            List<Parts> parts = partsServices.getByName(name);
            return ResponseEntity.ok(parts);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving parts by name: " + e.getMessage());
        }
    }

    // Get parts by price
    @GetMapping("/price/{price}")
    public ResponseEntity<?> getPartsByPrice(@PathVariable BigDecimal price) {
        try {
            List<Parts> parts = partsServices.getByPrice(price);
            return ResponseEntity.ok(parts);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving parts by price: " + e.getMessage());
        }
    }

    // Get parts by description
    @GetMapping("/description/{description}")
    public ResponseEntity<?> getPartsByDescription(@PathVariable String description) {
        try {
            List<Parts> parts = partsServices.getByDescription(description);
            return ResponseEntity.ok(parts);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving parts by description: " + e.getMessage());
        }
    }
}
