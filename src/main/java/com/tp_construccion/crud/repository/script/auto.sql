-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS tp_construccion;

-- Usar la base de datos
USE tp_construccion;

-- Crear la tabla 'auto'
CREATE TABLE IF NOT EXISTS auto (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,  -- ID autoincremental
    marca VARCHAR(255) NOT NULL,           -- Marca del auto
    modelo VARCHAR(255) NOT NULL,          -- Modelo del auto
    precio DOUBLE NOT NULL,                -- Precio del auto
    anno INT NOT NULL                      -- Año del auto
);

-- Insertar algunos datos de ejemplo
INSERT INTO auto (marca, modelo, precio, anno) VALUES
('Toyota', 'Corolla', 15000.00, 2020),
('Honda', 'Civic', 17000.00, 2021),
('Ford', 'Fiesta', 12000.00, 2019);
