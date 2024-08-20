import React from "react";

// El componente Table recibe `netIncomes` como una prop
const Table = ({ netIncomes }) => {
    // Calcular el promedio de ingresos netos
    const totalIncome = netIncomes.reduce((acc, item) => acc + item.income, 0);
    const averageIncome = totalIncome / netIncomes.length;

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Net Income</th>
                    </tr>
                </thead>
                <tbody>
                    {netIncomes.map((item, index) => (
                        <tr key={index}>
                            <td>{item.brand}</td>
                            <td>{item.income.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Average Net Income: {averageIncome.toLocaleString()}</p>
        </div>
    );
};

export default Table;
