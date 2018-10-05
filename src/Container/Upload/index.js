import React, { Component } from 'react'
import ManualUpload from './components/ManualUpload';

export const MyContext = React.createContext();

// Then create a provider Component
class MyProvider extends Component {
  state = {
    number: 1
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        increaseNumber: () => this.setState({
          number: this.state.number + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export class Upload extends Component {
  constructor(props){
      super(props);
  }

  render() {
    return (
    <MyProvider>
      <div style={{border: "1px solid red"}}>
        Upload Container
        <ManualUpload />
      </div>
      </MyProvider>
    )
  }
}

export default Upload;
