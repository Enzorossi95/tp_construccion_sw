package com.tp_construccion.crud.repository;

import com.tp_construccion.crud.entities.Auto;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AutoRepository extends CrudRepository<Auto, Long> {
    List<Auto> findByMarca(String marca);
}
