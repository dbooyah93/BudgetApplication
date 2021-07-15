import React from 'react';
import SpreadSheet from './modules/SpreadSheet.jsx';
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
    let date = new Date();
      return (
        <div>
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-4"></div>
                <div class="col-4 text-center">
                  <h1>Financial saving solutions</h1>
                  <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
                </div>
                <div class="col-4"></div>
              </div>
              <SpreadSheet/>
            </div>
          </div>
        </div>
      )
  }
}

export default App;