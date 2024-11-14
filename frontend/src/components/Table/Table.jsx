import "./Table.css";
import {useState} from "react";

const Table = ({ data, columns, pagination, displayLength = 10 }) => {
    const [page, setPage] = useState(1);
    const [actualDisplayLength, setActualDisplayLength] = useState(displayLength);

    return (
        <div className="table__container">
            <table className="table">
                <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column}>{column}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.slice((page - 1) * actualDisplayLength, page * actualDisplayLength).map((item) => (
                    <tr key={item.id}>
                        {columns.map((column) => (
                            <td key={column}>{item[column]}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
            {pagination && (
                <div>
                    <button onClick={() => setPage(page - 1)} disabled={page === 1}>Anterior</button>
                    <button onClick={() => setPage(page + 1)} disabled={page === Math.ceil(data.length / displayLength)}>Siguiente</button>
                    <select value={actualDisplayLength} onChange={(e) => setActualDisplayLength(e.target.value)}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                    </select>
                </div>
            )}
        </div>
    );
}

export default Table;