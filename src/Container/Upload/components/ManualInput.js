import React, { Component } from 'react'
import { MyContext } from '../index';

export class ManualInput extends Component {
  render() {
    return (
      <div style={{border: "1px solid black"}}>
       ManualInput
       <MyContext.Consumer>
        {(context) => (
          <div>
            <p>{context.state.number}</p>
            <button onClick={context.increaseNumber}>Increase</button>
            </div>
          )}
          
       </MyContext.Consumer>
      </div>
    )
  }
}

export default ManualInput
