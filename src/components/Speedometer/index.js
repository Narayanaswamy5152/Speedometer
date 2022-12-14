// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onClickApplyingBrakes = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.count - 10}))
    }
  }

  onClickApplyingAcceleration = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.count + 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
          className="image"
        />
        <h1 className="paragraph">
          Speed is {speed}
          mph
        </h1>
        <p className="para">minimum speed is 0 mph,maximum speed is 200 mph</p>
        <div className="buttonContainer">
          <button
            className="button1"
            type="button"
            onClick={this.onClickApplyingAcceleration}
          >
            Accelerate
          </button>
          <button
            className="button2"
            onClick={this.onClickApplyingBrakes}
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
