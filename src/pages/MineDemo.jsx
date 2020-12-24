import React from 'react';
import { withRouter } from 'react-router-dom';

class MineDemo extends React.Component {

    handleLogin = () => {
        // console.log(this.props)
        this.props.history.push('/login')
    }

    render() {
        return (
            <button onClick={this.handleLogin}>登录</button>
        )
    }
}

export default withRouter(MineDemo)