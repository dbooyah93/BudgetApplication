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
                    <h1>Hello General Sarai</h1>
                  </div>
                  <div class="col-4"></div>
                </div>
              </div>
            </div>
        </div>
      )
  }
}

export default App;