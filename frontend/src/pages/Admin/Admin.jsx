import Table from "../../components/Table/Table.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/autos";

const Admin = () => {
    const [autos, setAutos] = useState([]);
    const [nuevoAuto, setNuevoAuto] = useState({ marca: "", anno: "", modelo: "", precio: "" });
    const [autoActualizar, setAutoActualizar] = useState({ id: "", nuevoPrecio: "" });

    // Cargar datos al iniciar
    useEffect(() => {
        cargarAutos();
    }, []);

    const cargarAutos = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/autos");
            setAutos(response.data);
        } catch (error) {
            console.error("Error al cargar autos:", error);
        }
    };

    // Crear un auto nuevo
    const crearAuto = async () => {
        try {
            await axios.post("http://localhost:8080/api/v1/autos", nuevoAuto);
            cargarAutos(); // Recargar la tabla
            setNuevoAuto({ marca: "", anno: "", modelo: "", precio: "" }); // Limpiar el formulario
        } catch (error) {
            console.error("Error al crear auto:", error);
        }
    };

    // Actualizar precio de un auto
    const actualizarPrecio = async () => {
        try {
            await axios.put(`http://localhost:8080/api/v1/autos/${autoActualizar.id}/nuevoprecio/${autoActualizar.nuevoPrecio}`);
            cargarAutos(); // Recargar la tabla
            setAutoActualizar({ id: "", nuevoPrecio: "" }); // Limpiar el formulario
        } catch (error) {
            console.error("Error al actualizar precio:", error);
        }
    };

    // Eliminar un auto
    const eliminarAuto = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/v1/autos/${id}`);
            cargarAutos(); // Recargar la tabla
        } catch (error) {
            console.error("Error al eliminar auto:", error);
        }
    };

    return (
        <div>
            <h1>Gestión de Automóviles</h1>

            {/* Crear Auto */}
            <h2>Crear un Auto Nuevo</h2>
            <div>
                <input
                    type="text"
                    placeholder="Marca"
                    value={nuevoAuto.marca}
                    onChange={(e) => setNuevoAuto({ ...nuevoAuto, marca: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Año"
                    value={nuevoAuto.anno}
                    onChange={(e) => setNuevoAuto({ ...nuevoAuto, anno: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Modelo"
                    value={nuevoAuto.modelo}
                    onChange={(e) => setNuevoAuto({ ...nuevoAuto, modelo: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Precio"
                    value={nuevoAuto.precio}
                    onChange={(e) => setNuevoAuto({ ...nuevoAuto, precio: e.target.value })}
                />
                <button onClick={crearAuto}>Crear Auto</button>
            </div>

            {/* Actualizar Precio */}
            <h2>Actualizar Precio de un Auto</h2>
            <div>
                <input
                    type="number"
                    placeholder="ID del auto"
                    value={autoActualizar.id}
                    onChange={(e) => setAutoActualizar({ ...autoActualizar, id: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Nuevo Precio"
                    value={autoActualizar.nuevoPrecio}
                    onChange={(e) => setAutoActualizar({ ...autoActualizar, nuevoPrecio: e.target.value })}
                />
                <button onClick={actualizarPrecio}>Actualizar Precio</button>
            </div>

            {/* Tabla de Autos */}
            <h2>Listado de Autos</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Marca</th>
                        <th>Año</th>
                        <th>Modelo</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {autos.map((auto) => (
                        <tr key={auto.id}>
                            <td>{auto.id}</td>
                            <td>{auto.marca}</td>
                            <td>{auto.anno}</td>
                            <td>{auto.modelo}</td>
                            <td>{auto.precio}</td>
                            <td>
                                <button onClick={() => eliminarAuto(auto.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Admin;