import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    const {score, time} = this.props
    console.log(time)
    return (
      <nav className="nav-background-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          className="nav-logo"
          alt="website logo"
        />
        <ul className="nav-score-timer-container">
          <li className="nav-score-heading">
            <p>
              Score: <span className="nav-score-timer-value">{score}</span>
            </p>
          </li>
          <li className="nav-timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="nav-timer-img"
            />
            <p className="nav-score-timer-value">{time} sec</p>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
