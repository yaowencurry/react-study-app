import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from './store/actions/counter';
import TopNav from './components/TopNav/TopNav';
// import User from './pages/User';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';



class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <TopNav />
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
export default connect(mapStateToProps, mapDispatchToProps)(App)