import React, { Component } from 'react'
import './css/app.css'
import Animation from './animation'

const Box = ({ name, onClick }) =>
  <div className="col-4" onClick={onClick}>
    <div className="text">{name}</div>
    <div className="box">Click Me</div>
  </div>


class Example extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animations: [
        'topIn',
        'bottomIn',
        'leftIn',
        'rightIn',
        'topInBottomOut',
        'zoomIn',
        'fade'
      ],
      exit: false
    }

  }


  render() {

    return (
      <React.Fragment>
        <div className="title">React-Animations - Examples</div>

        <div className="btn" onClick={() => this.setState({ exit: !this.state.exit })}>
          Click Me
        </div>
        <div className="container">
          {
            this.state.animations.map(t =>
              <div className="col-4" >
                <div className="typeName">{t}</div>
                <div className="boxContainer">
                  <Animation act={t} in={this.state.exit}>
                    <div className="box"></div>
                  </Animation>
                </div>
              </div>
            )
          }
        </div>
      </React.Fragment>
    )
  }
}

export default Example