// Write your code here.
import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  render() {
    const {data, shuffle} = this.props
    const {id, emojiName, emojiUrl} = data
    return (
      <li className="list-item">
        <button type="button" className="emoji-item" onClick={this.shuffle()}>
          <img src={emojiUrl} alt={emojiName} className="emoji-pic" />
        </button>
      </li>
    )
  }
}

export default EmojiCard
