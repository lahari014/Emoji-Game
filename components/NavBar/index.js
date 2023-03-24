// Write your code here.
import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  state = {score: 0, topScore: 0}

  render() {
    return (
      <div className="navbar">
        <div className="card1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <p className="para">Emoji Game</p>
        </div>
        <div className="card1">
          <p className="para">Score:0</p>
          <p className="para">Top Score:0</p>
        </div>
      </div>
    )
  }
}

export default NavBar
