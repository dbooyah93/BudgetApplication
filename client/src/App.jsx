import React from 'react';
class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      
    }
    // bind functions here
    /** this.exampleFunction = this.exampleFunction.bind(this) */
  }

  // functions defined here
  /** exampleFunction(){} */

  render() {
      return (
        <div>
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-4"></div>
                  <div class="col-4 text-center">
                    <h1>Financial saving solutions</h1>
                  </div>
                  <div class="col-4"></div>
                </div>
                <table class="table">
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
                  </tbody>
                </table>
                <form class="form-inline" action="/action_page.php">
                  <label for="expense">Expense:</label>
                  <input type="text" id="expense" placeholder="Expense" name="expense"/>
                  <label for="cost">Cost:</label>
                  <input type="money" id="money" placeholder="Cost" name="cost"/>
                    <label for="category">Choose a Category</label>
                    <select name="remember">
                      <option value="Gasoline">Gasoline</option>
                      <option value="cat">Cat</option>
                      <option value="Groceries">Groceries</option>
                    </select>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
        </div>
      )
  }
}

export default App;