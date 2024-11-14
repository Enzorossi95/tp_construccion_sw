import Table from "../../components/Table/Table.jsx";

const MOCKDATA = [
    {
        id: 0,
        marca: "Toyota",
        anno: 2020,
        modelo: "Totora",
        precio: 403203
    },
    {
        id: 1,
        marca: "Ford",
        anno: 2020,
        modelo: "Ka",
        precio: 403203
    },
    {
        id: 42,
        marca: "Renault",
        anno: 2020,
        modelo: "Kwidasdasd sadas",
        precio: 403203
    },
    {
        id: 22,
        marca: "Toyota",
        anno: 2020,
        modelo: "Totora",
        precio: 403203
    },
    {
        id: 12,
        marca: "Ford",
        anno: 2020,
        modelo: "Ka",
        precio: 403203
    },
    {
        id: 421,
        marca: "Renault",
        anno: 2020,
        modelo: "Kwidasdasd sadas",
        precio: 403203
    },
    {
        id: 4321,
        marca: "Toyota",
        anno: 2020,
        modelo: "Totora",
        precio: 403203
    },
    {
        id: 231,
        marca: "Ford",
        anno: 2020,
        modelo: "Ka",
        precio: 403203
    },
    {
        id: 4422,
        marca: "Renault",
        anno: 2020,
        modelo: "Kwidasdasd sadas",
        precio: 403203
    },
    {
        id: 1232222,
        marca: "Toyota",
        anno: 2020,
        modelo: "Totora",
        precio: 403203
    },
    {
        id: 111231,
        marca: "Ford",
        anno: 2020,
        modelo: "Ka",
        precio: 403203
    },
    {
        id: 41112,
        marca: "Renault",
        anno: 2020,
        modelo: "Kwidasdasd sadas",
        precio: 403203
    },
]

const Admin = () => {
    return (
        <div>
            <h1>Gestión de automóviles</h1>

            <Table data={MOCKDATA} columns={["id", "marca", "anno", "modelo", "precio"]} pagination  />

        </div>
    );
}

export default Admin;