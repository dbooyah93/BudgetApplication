import React from 'react';

const InsertLine = () => {
    return (
        <tr>
            <th scope="row">
                <input type="text" placeholder="Expense"></input>
            </th>
            <td> {new Date().toLocaleString() + ""}</td>
            <td>
                <input type="text" placeholder="Cost"></input>
            </td>
            <td>
                <select type="select">
                    <option value="Gasoline">Gasoline</option>
                    <option value="cat">Cat</option>
                    <option value="Groceries">Groceries</option>
                </select>
            </td>
            <td>
            </td>
        </tr>
    )
}

export default InsertLine;