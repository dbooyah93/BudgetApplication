import React from 'react';
<tr>
<th scope="row">Cat Litter</th>
<td>Tuesday 07/06/2021</td>
<td>$22.04</td>
<td>Cats</td>
<td>$72.96</td>
</tr>

const InsertLine = ({expense, info}) => {
    
    return (
        <tr>
            <th scope="row">{expense}</th>
            <td>{info.purchased}</td>
            <td>{info.cost}</td>
            <td>{info.category}</td>
        </tr>
    )
}

export default InsertLine;