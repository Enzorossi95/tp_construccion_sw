package com.tp_construccion.crud.service;

import com.tp_construccion.crud.entities.Auto;

import java.util.Optional;
import java.util.List;

public interface IAutoService {
     Auto crear(Auto auto);
     Optional<Auto> obtenerPorId(Long id);
     Auto actualizar(Long id, double nuevoPrecio);
     boolean eliminar(Long id);
     List<Auto> obtenerTodos();
     List<Auto> obtenerPorMarca(String marca);
}
