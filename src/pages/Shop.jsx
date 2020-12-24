import React from 'react';
import { Redirect, Prompt } from 'react-router-dom';

export default class Shop extends React.Component {
    state = {
        isLogin: true,
        username: ''
    }

    handleChange = (e)=>{
        this.setState({
            username: e.target.value
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.isLogin
                        ? <div>Shop</div>
                        : <Redirect to="/home"></Redirect>
                }
                <Prompt 
                    when = {!!this.state.username}
                    message = { "确定要离开吗" }
                />
                <input type="text" value={this.state.username} onChange={this.handleChange}/>
            </div>
        )
    }
}