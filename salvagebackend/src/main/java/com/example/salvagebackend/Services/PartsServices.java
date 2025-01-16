package com.example.salvagebackend.Services;

import com.example.salvagebackend.DTO.PartDto;
import com.example.salvagebackend.Entity.Parts;
import com.example.salvagebackend.Repository.PartsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PartsServices {
    @Autowired
    PartsRepo myPartsRepo;
    // getting all the parts
    List<Parts> getAllParts() {
        List<Parts> allParts = myPartsRepo.findAll();
        return allParts;
    }

    // getting the parts with id
    public Parts getPartById(Long id) {
        return myPartsRepo.findById(id).orElseThrow(()-> new RuntimeException("the part with this " + id + " does not exist"));
    }

    // saving the parts details
     public Parts saveParts(PartDto partDto) {
        Parts savedParts = new Parts();
        savedParts.setName(partDto.getName());
        savedParts.setDescription(partDto.getDescription());
        savedParts.setPrice(partDto.getPrice());
        savedParts.setConditionGrade(partDto.getConditionGrade());
        savedParts.setQuantity(partDto.getQuantity());
      return   myPartsRepo.save(savedParts);
     }
// updating the parts
     public Parts updateParts(Long id, PartDto partDto) {
        Parts updatedParts = myPartsRepo.findById(id).orElseThrow(() -> new RuntimeException("the part with this " + id + " does not exist"));
        updatedParts.setName(partDto.getName());
        updatedParts.setDescription(partDto.getDescription());
        updatedParts.setPrice(partDto.getPrice());
        updatedParts.setConditionGrade(partDto.getConditionGrade());
        updatedParts.setQuantity(partDto.getQuantity());
        return myPartsRepo.save(updatedParts);

     }

     // delete the items
    public void deleteParts(Long id) {
    Parts existingPart = myPartsRepo.findById(id).orElseThrow(() -> new RuntimeException("the part with this " + id + " does not exist"));
    myPartsRepo.delete(existingPart);
    }

    // getting by conditiom
    public List<Parts> getPartsByConditionGrade(String conditionGrade) {
        List<Parts> conditionParts = myPartsRepo.findByConditionGrade(conditionGrade);
       if (conditionParts.isEmpty()) {

throw new RuntimeException("the part with this " + conditionGrade + " does not exist");
       }
       return conditionParts;
    }

    // getting item by name
    public List<Parts> getByName(String name) {
        List<Parts> nameParts = myPartsRepo.findByName(name);
        if (nameParts.isEmpty()) {
            throw new RuntimeException("the part with this " + name + " does not exist");
        }
        return nameParts;
    }

    // getting by price
    public List<Parts> getByPrice(BigDecimal price) {
        List<Parts> priceParts = myPartsRepo.findByPrice(price);
        if (priceParts.isEmpty()) {
            throw new RuntimeException("the part with this " + price + " does not exist");
        }
        return priceParts;
    }

    // getting by description
    public List<Parts> getByDescription(String description) {
        List<Parts> descriptionParts = myPartsRepo.findByDescription(description);
        if (descriptionParts.isEmpty()) {
            throw new RuntimeException("the part with this " + description + " does not exist");
        }
        return descriptionParts;
    }
}
