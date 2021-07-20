import React from 'react';
import { render } from 'react-dom';

/* {for (const [key, value] of Object.entries(expenses)) {
    return (
        <th scope="row">{key}</th>
        <td>
            <InsertLine value={value}/>
        </td>
        
    )
}} */

const InsertLine = (props) => {
    let definitions = Object.keys(props.expenses);
    let details = Object.values(props.expenses);
    console.log(props.expenses);
    return (
        <div>
            {definitions.map( (def, index) => {
                return(
                    <th scope="row">{def}</th>
                )
            })}
        </div>
    )
}

export default InsertLine;