/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import './index.css'

class EmojiGame extends Component {
  state = {emojiList: []}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {emojisList} = this.props
    return (
      <>
        <NavBar />
        <div className="container">
          <ul>
            {emojisList.map(each => (
              <EmojiCard
                data={each}
                key={each.id}
                shuffle={this.shuffledEmojisList()}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default EmojiGame
