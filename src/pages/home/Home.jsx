import React from 'react';
import DiscoverSubNav from "../../components/TopNav/sub/DiscoverSubNav";
import { HashRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import * as counterActions from "../../actions/moule/counter";
import * as musicActions from '../../actions/moule/music'
import { bindActionCreators } from 'redux';
import MUSICAPI from '../../api/music';

import { RefreshLogin } from "../../api/common";



class Home extends React.Component {

  getUserPlayList = () => {
    RefreshLogin()
    if (this.props.user.isLogin) {
      MUSICAPI.getUserPlayList({ uid: this.props.user.profile.userId })
        .then(res => {
        })
      MUSICAPI.getDayRecommendList()
        .then(res => {
        })
    }
    MUSICAPI.getMusicUrl({ id: '176053' }).then(res => {
      res && this.props.musicActions.saveMusicList(res)
    })
  }

  componentDidMount () {
    this.getUserPlayList();
    console.log(this.props);
  }

  render () {
    return (
      <div>
        <Router>
          <DiscoverSubNav />
          {
            this.props.children
          }
          <Switch>
            {/* <Route path="/discover/" component={Recommend}></Route>
            <Route exact path="/discover/recommend" component={Recommend}></Route>
            <Route exact path="/discover/demo2" component={Demo1}></Route>
            <Redirect from="/*" to="/discover/recommend" /> */}
          </Switch>
        </Router>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    user: state.user,
    music: state.music
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    counterActions: bindActionCreators(counterActions, dispatch),
    musicActions: bindActionCreators(musicActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)