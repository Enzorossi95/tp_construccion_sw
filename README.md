# TP Construcción de Software

# Proyecto de Administración de Autos

Este proyecto es una aplicación web para la gestión de autos. Tiene dos partes principales:
- **Backend**: API para gestionar los autos y sus datos.
- **Frontend**: Interfaz de usuario para interactuar con la API.

## Pasos para ejecutar el Backend

En la raiz del proyecto instalar las dependencias con el comando 
```
npm install
```

Configurar las variables de la base de datos en el siguiente archivo
```
src/main/resources/application.properties
```

Ejecutar el backend
```
mvn spring-boot:run
```

## Pasos para ejecutar el Frontend

En una nueva terminal, cambiarse a la carpeta
```
cd frontend
```

Instalar las dependencias
```
npm install
```

Ejecutar el Front end
```
npm run dev
```