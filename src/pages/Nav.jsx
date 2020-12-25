import React from 'react';
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
    render() {
        return (
            <ul className="nav nav-pills">
                <li role="presentation" className="active">
                    <Link to="/mine">我的</Link>
                </li>
                <li role="presentation">
                    <Link to="/login">登录</Link>
                </li>
                <li role="presentation">
                    <Link to="/usercenter">用户中心</Link>
                </li>
            </ul>
        )
    }
}