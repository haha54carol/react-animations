import React, { Component } from 'react'
import './css/app.css'

import Animation from './animation'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAnimate: false
    }
  }


  render() {

    return (
      <React.Fragment>
        <Animation act="rightIn" in={this.state.showAnimate}>
          <div className="test"></div >
        </Animation>
        <div className="btn" onClick={() => this.setState({ showAnimate: !this.state.showAnimate })}>{this.state.showAnimate ? 'show' : 'none'}</div>
      </React.Fragment>
    )
  }
}
