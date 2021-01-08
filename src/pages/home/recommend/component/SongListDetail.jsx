import React from 'react'
import { withRouter } from 'react-router-dom'
import MUSICAPI from '../../../../api/music'
import PlayMusicList from './PlayMusicList'

class PlayListInfo extends React.Component {

  render () {
    const { playlist } = this.props.info
    return (
      <div>
        <img src={playlist.coverImgUrl} alt="" style={{ width: '100px' }} />
        <h1>{playlist.name}</h1>
        <p>{playlist.description}</p>
      </div>
    )
  }
}

class SongListDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      detail: {}
    }
  }

  async componentWillMount () {
    await this.getPlayListDetail()
  }

  getPlayListDetail = () => {
    const { id } = this.props.match.params
    if (id) {
      return new Promise((resolve, reject) => {

        MUSICAPI.getPlayListDetail({ id })
          .then(res => {
            console.log(res);
            if (res) {
              this.setState({ detail: res })
              resolve()
            } else {
              reject('获取歌单详情失败')
            }
          })
      })
    }
  }

  render () {
    const { detail } = this.state;
    return (
      <div className="base">
        <div className="base__left">
          {
            Object.keys(detail).length > 0
              ? <PlayListInfo info={detail} />
              : <></>
          }
          {
            Object.keys(detail).length > 0
              ? <PlayMusicList info={detail} />
              : <></>
          }
        </div>
        <div className="base__right">you</div>
      </div>
    )
  }
}

export default withRouter(SongListDetail)