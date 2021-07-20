import React from 'react';
import InsertLine from './InsertLine.jsx';

const SpreadSheet = (props) => {
    console.log(categories);
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
                    <tr>
                        <th scope="row">Cat Litter</th>
                        <td>Tuesday 07/06/2021</td>
                        <td>$22.04</td>
                        <td>Cats</td>
                        <td>$72.96</td>
                    </tr>
                    <tr>
                        <th scope="row">Mecardo Fresco Meat and produce</th>
                        <td>Tuesday 07/06/2021</td>
                        <td>$155.48</td>
                        <td>Groceries</td>
                        <td>$134.52</td>
                    </tr>
                    <tr>
                        <th scope="row">Premium 11.1 Gallons</th>
                        <td>Tuesday 07/06/2021</td>
                        <td>$33.48</td>
                        <td>Gasoline</td>
                        <td>$114.52</td>
                    </tr>
                    <InsertLine/>
                </tbody>
            </table>
        </div>
    )
}

export default SpreadSheet;