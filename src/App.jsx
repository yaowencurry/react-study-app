import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TopNav from "./components/TopNav/TopNav";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import * as userActions from './actions/moule/user';
import Home from './pages/home/Home';
import NotFound from './pages/NotFound';
import PlayMusic from './components/PlayMusic/PlayMusic';
import Recommend from './pages/home/recommend/Recommend';
import SongListDetail from './pages/home/recommend/component/SongListDetail';



class App extends React.Component {
    render () {
        return (
            <div className="app" id="app">
                <Router>
                    <TopNav></TopNav>
                    <Switch>
                        <Route exact path="/mine" render={() => <div>mine页面</div>}></Route>
                        <Route exact path="/friend" render={() => <div>friend页面</div>}></Route>
                        <Home>
                            <Switch>
                                <Route exact path="/discover/recommend" component={Recommend}>
                                </Route>
                                <Route exact path="/discover/listdetail/:id" component={SongListDetail}></Route>
                                <Route exact path="/discover/demo2" render={() => <div>demo2</div>}></Route>
                                <Route component={NotFound}></Route>
                            </Switch>
                        </Home>
                        <Route component={NotFound}></Route>
                    </Switch>
                </Router>
                <PlayMusic />
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)