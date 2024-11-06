package com.tp_construccion.parte1.crud.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;


@Data
@Entity
public class Auto {
    @Id
    private Long id;
    private String marca;
    private int anno;
    private int capacidad;
    private double precio;
}
