import React from 'react';

import TableRow from './TableRow';
import './Table.css'

const Table = props => {
    return (
        <div className="container table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th><abbr title="Unique ID for the option">Unique ID</abbr></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map(option => (
                        <TableRow
                            key={option.option_id}
                            id={option.option_id_unique}
                            name={option.option_name}
                            price={option.price}
                            category={option.category_name}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;