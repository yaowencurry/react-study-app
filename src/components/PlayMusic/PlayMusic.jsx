import React from 'react';
import './PlayMusic.scss'

export default class PlayMusic extends React.Component {
  render () {
    return (
      <div className="music">
        <audio controls>
          <source src="horse.mp3" type="audio/mpeg" />
        </audio>
      </div>
    )
  }
}