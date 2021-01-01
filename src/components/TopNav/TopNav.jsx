import React from 'react';
import { NavLink } from "react-router-dom";
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Login from '../../pages/Login'
import "./TopNav.scss";
import Dialog from "../../packages/dialog/Dialog";

import { connect } from 'react-redux'

class MenuRight extends React.Component {

    state = {
        isShowLoginDialog: false
    }

    handleLogin = () => {
        this.setState({
            isShowLoginDialog: true
        })
    }

    handleClose = () => {
        this.setState({
            isShowLoginDialog: false
        })
    }

    render () {
        const { userInfo } = this.props;
        return (
            <div className="nav__container__handle flex flex-end">
                <Input
                    placeholder="音乐/视频/电台/用户" className="nav__container__handle--input"
                    prefix={<SearchOutlined />}
                />
                <div className="nav__container__handle--create">创作中心</div>
                {
                    userInfo.isLogin
                        ? <img src={userInfo.profile.avatarUrl} alt="头像" className="nav__container__handle--avatar" />
                        : <span className="nav__container__handle--login" onClick={this.handleLogin}>登录</span>

                }
                {
                    this.state.isShowLoginDialog
                        ? (<Dialog component={Login} title="登录" close={this.handleClose}/>)
                        : false
                }
            </div>
        )
    }
}

const menuList = [
    {
        path: '/discover',
        name: '发现音乐'
    },
    {
        path: '/mine',
        name: '我的音乐'
    },
    {
        path: '/friend',
        name: '朋友'
    },
    {
        path: '/shop',
        name: '商城'
    },
    {
        path: '/musicial',
        name: '音乐人'
    },
    {
        path: '/app',
        name: '下载客户端'
    },
]

class TopNav extends React.Component {

    render () {
        return (
            <div>
                <div className="nav">
                    <div className="nav__container flex">
                        <div className="nav__container__box flex flex-start">
                            <div className="nav__container__logo"></div>
                            <ul className="nav__container__content flex">
                                {
                                    menuList.map((item, index) => {
                                        return (
                                            <NavLink to={item.path} className="nav__container__content--item" key={index}>{item.name}</NavLink>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <MenuRight userInfo={this.props.userInfo} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.user,
        loginState: state.loginState
    }
}

export default connect(mapStateToProps)(TopNav)