package com.example.salvagebackend.Repository;

import com.example.salvagebackend.Entity.Parts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PartsRepo extends JpaRepository<Parts, Long> {
    List<Parts> findByName(String name);
    List<Parts> FindByConditionGrade(String grade);
    List<Parts> FindByPrice(String price);
    List<Parts> findByDescription(String description);

}
