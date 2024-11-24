package com.tp_construccion.crud.repository;

import com.tp_construccion.crud.entities.Auto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AutoRepository extends JpaRepository<Auto, Long> {
    List<Auto> findByMarca(String marca);
}
