import React from 'react';
import Demo1 from "../components/demo1";
const MyApi = {
    count: 0,
    subScribe(cb) {
        this.intervalId = setInterval(() => {
            this.count += 1
            cb(this.count)
        }, 1000)
    },
    unSubscribe() {
        clearInterval(this.intervalId);
        this.reset();
    },
    reset() {
        this.count = 0;
    }
}

export default class Login extends React.Component {
    state = {
        count: 0
    }
    componentDidMount() {
        MyApi.subScribe((count) => {
            this.setState({
                count
            })
        })
    }
    componentWillUnmount() {
        MyApi.unSubscribe();
    }
    render() {
        console.log('login -> render')
        return (
            <div className="text-center">
                <h1>{this.state.count}</h1>
                <h2>登录</h2>
                <Demo1 num={ this.state.count }/>
            </div>
        )
    }
}