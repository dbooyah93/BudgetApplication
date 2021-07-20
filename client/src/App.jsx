import React from 'react';
import SpreadSheet from './modules/SpreadSheet.jsx';
class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      userName: 'Bobby',
      expenses: {
        'Cat Litter': {
          purchased: 'Tuesday 07/06/2021',
          cost: '22.04',
          category: '1',
        },
        'Mecardo Fresco Meat and Produce': {
          purchased: 'Tuesday 07/06/2021',
          cost: '155.48',
          category: '2',
        },
        'Premium 11.1 Gallons': {
          purchased: 'Tuesday 07/06/2021',
          cost: '22.04',
          category: '3',
        }
      },
      budget: {
        1: 95,
        2: 289,
        3: 150,
      },
      entry: {
        expsense: '',
        purchased: '',
        cost: NaN,
        category: NaN,
      },
      categories: ['cats', 'groceries', 'gasoline']
    }
    // bind functions here
    /** this.exampleFunction = this.exampleFunction.bind(this) */
  }

  // functions defined here
  /** exampleFunction(){} */

  render() {
      return (
        <div>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-4"></div>
                <div className="col-4 text-center">
                  <h1>Financial Saving Solution</h1>
                </div>
                <div className="col-4"></div>
              </div>
              <SpreadSheet
                budget={this.state.budget}
                entry={this.state.entry}
                expenses={this.state.expenses}
                categories={this.state.categories}
                />
            </div>
          </div>
        </div>
      )
  }
}

export default App;