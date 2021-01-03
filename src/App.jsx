import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TopNav from "./components/TopNav/TopNav";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import * as userActions from './actions/moule/user';
import Home from './pages/home/Home';
import NotFound from './pages/NotFound';
import PlayMusic from './components/PlayMusic/PlayMusic';



class App extends React.Component {
    render () {
        return (
            <div className="app" id="app">
                <Router>
                    <TopNav></TopNav>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/discover" component={Home}></Route>
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