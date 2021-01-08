import React from 'react';
import './PlayMusic.scss';
import { connect } from 'react-redux'

class PlayMusic extends React.Component {
  componentWillReceiveProps (newProps) {
    this.controlMusicPlay(newProps.isPlay)
  }

  controlMusicPlay (state) {
    const music = document.getElementById('music');
    if (this.props.musicList.length > 0) {
      music.src = this.props.musicList[0].url
      state ? music.play() : music.pause()
    }
  }

  render () {
    return (
      <div className="music">
        <audio controls id="music">
          <source type="audio/mpeg" />
        </audio>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    musicList: state.music,
    isPlay: state.isPlay
  }
}

export default connect(mapStateToProps)(PlayMusic)