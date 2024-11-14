package com.tp_construccion.crud.entities;

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
    private String modelo;
    private double precio;
}
