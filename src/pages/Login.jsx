import React from 'react';
import { Form, Input, Button } from 'antd';
import * as userActions from '../actions/moule/user';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { LoginSubmit } from '../api/common';

import '../assets/css/common.scss';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

const formList = [
    {
        label: '手机号',
        name: "phone",
        rules: [
            {
                required: true,
                message: '请填写正确的手机号',
            },
        ]
    },
    {
        label: '密码',
        name: "password",
        rules: [
            {
                required: true,
                message: '请填写密码',
            },
        ]
    },

]

const withInput = (name) => {
    if (name === 'password') return (<Input.Password />)
    return (<Input />)
}

class Login extends React.Component {

    onFinish = (values) => {
        LoginSubmit(values).then(res => {
            if (res) {
                sessionStorage.setItem('userInfo', JSON.stringify(res.data));
                this.props.userActions.saveLoginState(true)
                this.props.userActions.saveUserInfo(res.data)
                this.props.close();
            }
        })
    }

    render () {
        return (
            <div className="login">
                <Form {...layout} onFinish={this.onFinish}>
                    {
                        formList.map((item, index) => {
                            return (
                                <Form.Item
                                    key={index}
                                    label={item.label}
                                    name={item.name}
                                    rules={item.rules}
                                >
                                    { withInput(item.name)}
                                </Form.Item>
                            )
                        })
                    }
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
                        <Button type="primary" htmlType="submit">登录</Button>
                    </Form.Item>
                </Form>
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

const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);