package com.example.salvagebackend.Repository;

import com.example.salvagebackend.Entity.Parts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface PartsRepo extends JpaRepository<Parts, Long> {
}
