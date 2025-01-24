package com.example.salvagebackend.Controller;

import com.example.salvagebackend.Configurations.ApiResponse;
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
@RequestMapping("/api/v3/parts")
@CrossOrigin(origins = "*")
public class PartsController {

    @Autowired
    private PartsServices partsServices;

    // Get all parts
    @GetMapping("/")
    public ResponseEntity<ApiResponse<?>> getAllParts() {
        try {
            List<Parts> parts = partsServices.getAllParts();
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Parts retrieved successfully",
                    parts,
                    null
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Error retrieving parts",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Get part by ID
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<?>> getPartById(@PathVariable Long id) {
        try {
            Parts part = partsServices.getPartById(id);
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Part retrieved successfully",
                    part,
                    null
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Error retrieving part",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Create new part
    @PostMapping("/")
    public ResponseEntity<ApiResponse<?>> createPart(@RequestBody PartDto partDto) {
        try {
            Parts part = partsServices.saveParts(partDto);
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.CREATED.value(),
                    "Part created successfully",
                    part,
                    null
            );
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Error creating part",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Update part
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<?>> updatePart(@PathVariable Long id, @RequestBody PartDto partDto) {
        try {
            Parts part = partsServices.updateParts(id, partDto);
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Part updated successfully",
                    part,
                    null
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Error updating part",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Delete part
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<?>> deletePart(@PathVariable Long id) {
        try {
            partsServices.deleteParts(id);
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Part deleted successfully",
                    null,
                    null
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Error deleting part",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Get parts by condition grade
    @GetMapping("/condition/{grade}")
    public ResponseEntity<ApiResponse<?>> getPartsByCondition(@PathVariable String grade) {
        try {
            List<Parts> parts = partsServices.getPartsByConditionGrade(grade);
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Parts retrieved successfully",
                    parts,
                    null
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Error retrieving parts by condition",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Get parts by name
    @GetMapping("/name/{name}")
    public ResponseEntity<ApiResponse<?>> getPartsByName(@PathVariable String name) {
        try {
            List<Parts> parts = partsServices.getByName(name);
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Parts retrieved successfully",
                    parts,
                    null
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Error retrieving parts by name",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Get parts by price
    @GetMapping("/price/{price}")
    public ResponseEntity<ApiResponse<?>> getPartsByPrice(@PathVariable BigDecimal price) {
        try {
            List<Parts> parts = partsServices.getByPrice(price);
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Parts retrieved successfully",
                    parts,
                    null
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Error retrieving parts by price",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Get parts by description
    @GetMapping("/description/{description}")
    public ResponseEntity<ApiResponse<?>> getPartsByDescription(@PathVariable String description) {
        try {
            List<Parts> parts = partsServices.getByDescription(description);
            ApiResponse<?> response = new ApiResponse<>(
                    HttpStatus.OK.value(),
                    "Parts retrieved successfully",
                    parts,
                    null
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<String> errorResponse = new ApiResponse<>(
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    "Error retrieving parts by description",
                    null,
                    e.getMessage()
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}