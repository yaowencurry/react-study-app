import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from './store/actions/counter';
import TopNav from "./components/TopNav/TopNav";
import { HashRouter as Router, Switch } from 'react-router-dom';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';



class App extends React.Component {
    render () {
        // const { increment, decrement } = this.props;
        return (
            <div>
                <Router>
                    <Switch>

                        <TopNav></TopNav>
                    </Switch>
                </Router>
                {/* <User />
                <div className="page-header text-center">
                    <h1>{this.props.counter}</h1>
                    <button type="button" className="btn btn-primary" onClick={increment}>增加</button>
                    <button type="button" className="btn btn-primary" onClick={decrement}>减少</button>
                    <button type="button" className="btn btn-primary" onClick={() => this.props.counterActions.increment(3)}>增加</button>
                    <button type="button" className="btn btn-primary" onClick={() => this.props.counterActions.decrement(2)}>减少</button>
                    <button type="button" className="btn btn-primary" onClick={() => this.props.onIncrement()}>增加</button>
                    <button type="button" className="btn btn-primary" onClick={() => this.props.onDecrement()}>减少</button>
                </div> */}
                {/* <ul>
                    {
                        this.props.user.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul> */}
                {/* <Router>
                    <Nav></Nav>
                    <Switch>
                        <Route exact path="/" component={Mine}></Route>
                        <Route exact strict path="/mine" component={Mine}></Route>
                        <Route exact strict path="/login" component={Login}></Route>
                        <Route exact strict path="/usercenter" component={UserCenter}></Route>
                        <Route exact strict path="/shop" component={Shop}></Route>
                        <Book >
                            <Switch>
                                <Route path="/book/javabook" component={JavaBook}></Route>
                                <Route path="/book/webbook" component={WebBook}></Route>
                            </Switch>
                        </Book>
                        <Route component={NotFound}></Route>
                    </Switch>
                </Router> */}
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