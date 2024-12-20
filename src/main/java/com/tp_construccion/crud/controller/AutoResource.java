package com.tp_construccion.crud.controller;

import com.tp_construccion.crud.entities.Auto;
import com.tp_construccion.crud.service.IAutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/v1")
public class AutoResource {

    @Autowired
    private IAutoService autoService;

    @PostMapping("autos")
    public ResponseEntity<Auto> crearAuto(@RequestBody Auto auto) {
        return new ResponseEntity(this.autoService.crear(auto), HttpStatus.CREATED);
    }

    @GetMapping("/autos/{id}")
    public ResponseEntity<Auto> obtenerAuto(@PathVariable("id") Long id) {
        Optional<Auto> optionalAuto = this.autoService.obtenerPorId(id);
        if (optionalAuto.isPresent())
            return new ResponseEntity(optionalAuto.get(), HttpStatus.OK);
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/autos/{id}/nuevoprecio/{precio}")
    public ResponseEntity<Auto> actualizarAuto(@PathVariable("id") Long id, @PathVariable("precio") double precio) {
        Auto autoActualizado = this.autoService.actualizar(id, precio);
        if (autoActualizado != null) {
            return new ResponseEntity(autoActualizado, HttpStatus.OK);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/autos/{id}")
    public ResponseEntity<Void> eliminarAuto(@PathVariable("id") Long id) {
        this.autoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/autos")
    public ResponseEntity<List<Auto>> listarAutos(@RequestParam(required = false) String marca) {
        List<Auto> autos;

        if (marca != null && !marca.isEmpty()) {
            autos = this.autoService.obtenerPorMarca(marca);
        } else {
            autos = this.autoService.obtenerTodos();
        }

        return new ResponseEntity<>(autos, HttpStatus.OK);
    }

}
