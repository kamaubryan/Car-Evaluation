package com.example.salvagebackend.Repository;

import com.example.salvagebackend.Entity.Parts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface PartsRepo extends JpaRepository<Parts, Long> {
    List<Parts> findByName(String name);
    List<Parts> findByConditionGrade(String conditionGrade);
    List<Parts> findByPrice(BigDecimal price);
    List<Parts> findByDescription(String description);

}
