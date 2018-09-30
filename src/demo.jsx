import React, { Component } from 'react'
import TextDiff from './TextDiff'
import {oldValue, newValue} from './mock'

export default class extends Component {
  render() {
    return (
      <div>
        <TextDiff
          width={1200}
          height={600}
          oldValue={oldValue} 
          newValue={newValue}
        />
      </div>
    )
  }
}