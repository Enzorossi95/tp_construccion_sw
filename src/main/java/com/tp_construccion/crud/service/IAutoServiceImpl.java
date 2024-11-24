package com.tp_construccion.crud.service;

import com.tp_construccion.crud.entities.Auto;
import com.tp_construccion.crud.repository.AutoRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IAutoServiceImpl implements IAutoService {

    private final AutoRepository autoRepository;

    public IAutoServiceImpl(AutoRepository autoRepository) {
        this.autoRepository = autoRepository;
    }

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
        return this.autoRepository.findById(id)
                .map(auto -> {
                    auto.setPrecio(nuevoPrecio);
                    return autoRepository.save(auto);
                })
                .orElseThrow(() -> new EntityNotFoundException("El auto con ID " + id + " no existe."));
    }

    @Override
    public boolean eliminar(Long id) {
        if (this.autoRepository.existsById(id)) {
            this.autoRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public List<Auto> obtenerTodos() {
        return this.autoRepository.findAll();
    }

    @Override
    public List<Auto> obtenerPorMarca(String marca) {
        return this.autoRepository.findByMarca(marca);
    }
}
