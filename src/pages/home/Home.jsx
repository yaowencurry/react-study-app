import React from 'react';
import DiscoverSubNav from "../../components/TopNav/sub/DiscoverSubNav";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import * as counterActions from "../../actions/moule/counter";
import { bindActionCreators } from 'redux';
import MUSICAPI from '../../api/music';

import { RefreshLogin } from "../../api/common";

const Demo1 = () => {
  return (
    <div>1231</div>
  )
}


class Home extends React.Component {

  getUserPlayList = () => {
    RefreshLogin()
    if (this.props.user.isLogin) {
      MUSICAPI.getUserPlayList({ uid: this.props.user.profile.userId })
        .then(res => {
          res && console.log(res);
        })
      MUSICAPI.getDayRecommendList()
        .then(res => {
          res && console.log(res);
        })
    }
  }

  componentDidMount () {
    this.getUserPlayList();
  }

  render () {
    console.log(this.props);
    return (
      <div>
        <Router>
          <DiscoverSubNav></DiscoverSubNav>
          <Switch>
            <Route path="/discover/demo1" component={Demo1}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    counterActions: bindActionCreators(counterActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)