import Table from "../../components/Table/Table.jsx";
import { useEffect, useState } from "react";

const Admin = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/autos")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al obtener datos");
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Gestión de automóviles</h1>
            <Table data={data} columns={["id", "marca", "anno", "modelo", "precio"]} pagination />
        </div>
    );
};
export default Admin;