import React from 'react';

const TableRow = props => {
    return (
        <tr>
            <th>{props.id}</th>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.category}</td>
        </tr>
    );
};

export default TableRow;