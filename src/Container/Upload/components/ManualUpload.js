import React, { Component } from 'react'
import ManualInput from './ManualInput';

export class ManualUpload extends Component {
  render() {
    return (
      <div style={{border: "1px solid blue", height: "300px"}} >
        Manual Upload
        <ManualInput />
      </div>
    )
  }
}

export default ManualUpload
