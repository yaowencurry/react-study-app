import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './pages/Nav';
import Mine from "./pages/Mine";
import UserCenter from './pages/UserCenter';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Shop from './pages/Shop';

import Book from "./pages/Book";
import WebBook from './pages/WebBook';
import JavaBook from './pages/JavaBook';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
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
                </Router>
            </div>
        )
    }
}