import React from 'react';

export default class UserCenter extends React.Component {
    handleClick = () => {
        // console.log(this.props)
        this.props.history.replace('/')
    }
    render() {
        return (
            <div>
                <h2>用户中心</h2>
                <button onClick={this.handleClick}>首页</button>
            </div>
        )
    }
}