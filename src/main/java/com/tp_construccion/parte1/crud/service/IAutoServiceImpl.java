package com.tp_construccion.parte1.crud.service;

import com.tp_construccion.parte1.crud.entities.Auto;
import com.tp_construccion.parte1.crud.repository.AutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class IAutoServiceImpl implements IAutoService {

    @Autowired
    private AutoRepository autoRepository;

    @Override
    public Auto crear(Auto auto) {
        return this.autoRepository.save(auto);
    }

    @Override
    public Optional<Auto> obtenerPorId(Long id) {
        return this.autoRepository.findById(id);
    }

    @Override
    public Auto actualizar(Long id, double nuevoPrecio) {
        Optional<Auto> auto = this.autoRepository.findById(id);
        if (auto.isPresent()) {
           Auto tmp = auto.get();
           tmp.setPrecio(nuevoPrecio);
           return crear(tmp);
        }
        return null;
    }

    @Override
    public boolean eliminar(Long id) {
        this.autoRepository.deleteById(id);
        return true;
    }

    @Override
    public List<Auto> obtenerTodos() {
        List<Auto> autos = new ArrayList<>();
        this.autoRepository.findAll().forEach(autos::add);
        return autos;
    }

    @Override
    public List<Auto> obtenerPorMarca(String marca) {
        return this.autoRepository.findByMarca(marca);
    }
}
