import React from 'react';
import MUSICAPI from '../../../../api/music';
import { withRouter } from 'react-router-dom'

const MusilCard = withRouter((props) => {
  const { info } = props;

  function handleDetail (id) {
    // props.history.push({ pathname: "/discover/listdetail", state: { id } });
    props.history.push('/discover/listdetail/' + id);
  }

  return (
    <div className="musicCard" onClick={() => handleDetail(info.id)}>
      <img src={info.coverImgUrl} alt="" />
      <p>{info.name}</p>
    </div>
  )
})

class HotSongList extends React.Component {

  constructor() {
    super();
    this.state = {
      topMusicList: []
    }
  }

  componentDidMount () {
    console.log(this.props);
    MUSICAPI.getTopMusicList()
      .then(res => {
        res && this.setState({
          topMusicList: res.playlists.splice(0, 8)
        })
      })
  }
  render () {
    return (
      <div>
        热门歌单
        <div className="musicCardBox flex">
          {
            this.state.topMusicList.map(item => {
              return (
                <MusilCard key={item.id} info={item} />
              )
            })
          }
        </div>
      </div>
    )
  }
}
export default withRouter(HotSongList)