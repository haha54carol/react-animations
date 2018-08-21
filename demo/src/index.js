import React, { Component } from 'react'
import { render } from 'react-dom'
import Animation from '../../src/'
import '../../src/css/app.css'

class Demo extends Component {
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
        <div className="title">Simple-React-Animations - Examples</div>
        <div className="btn" onClick={() => this.setState({ exit: !this.state.exit })}>
          Click Me
        </div>
        <a className="link" href="https://github.com/haha54carol/react-animations" onClick={() => this.setState({ exit: !this.state.exit })}>
          Github⭐
        </a>
        <div className="container">
          {
            this.state.animations.map(t =>
              <div className="col-4" key={t}>
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

render(<Demo />, document.querySelector('#demo'))
