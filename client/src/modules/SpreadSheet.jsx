import React from 'react';
import InsertLine from './InsertLine.jsx';
// I'd like to focus this file into becoming a "Service" portion of a "service pattern" MVC
const SpreadSheet = (props) => {
    const expenses = Object.entries(props.expenses);
    const list = [];
    // this is not scalablevvv
    let remaining = props.map( ( props.budget, ( alocation, index ) => {
        return alocation - expenses[index][1];
    }));
    // calculateRemaining f () has to be on the parent component
    // the remaining variable will derive initially from the remaining database
        // (SQL)
        // (id, userId, categoryId, remaining)
    //calculateRemaining
        // find the new remaining amount for category[id]
        // update the internal memory and
        // make axios request to update database
    console.log(Object.entries(props.expenses))
    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Expense</th>
                        <th scope="col">Date Purchased</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Category</th>
                        <th scope="col">Remaining</th>
                    </tr>
                </thead>
                <tbody>
                    {           
                        expenses.map ( ( expense, index ) => {
                            let definition = expense[ 0 ]; 
                            let info = expense[ 1 ];
                            return (
                                <InsertLine expense={definition} info={info} remaining={0}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SpreadSheet;