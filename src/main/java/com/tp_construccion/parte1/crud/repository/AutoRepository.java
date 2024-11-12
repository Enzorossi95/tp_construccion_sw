package com.tp_construccion.parte1.crud.repository;

import com.tp_construccion.parte1.crud.entities.Auto;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AutoRepository extends CrudRepository<Auto, Long> {
    List<Auto> findByMarca(String marca);
}
