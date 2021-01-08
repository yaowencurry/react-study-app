import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as musicActions from '../../../../actions/moule/music'

class PlayMusicList extends React.Component {
  handleMusic = (id) => {
    console.log(this.props.info.playlist.tracks);
    this.props.musicActions.saveMusicIds(id);
  }
  render () {
    return (
      <div>
        {
          this.props.info.playlist.tracks.map(item => {
            return (
              <div key={item.id} onClick={() => this.handleMusic(item.id)}>
                {item.name}
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    music: state.music
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    musicActions: bindActionCreators(musicActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayMusicList)