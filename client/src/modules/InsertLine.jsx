import React from 'react';

const InsertLine = ({expense, info, remaining}) => {
    
    return (
        <tr>
            <th scope="row">{expense}</th>
            <td>{info.purchased}</td>
            <td>{info.cost}</td>
            <td>{info.category}</td>
            <td>{remaining}</td>
        </tr>
    )
}

export default InsertLine;