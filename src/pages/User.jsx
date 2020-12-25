import React from "react";
import { connect } from "react-redux";
import * as userActions from "../store/actions/user";
import { bindActionCreators } from "redux";

class User extends React.Component {
  state = {
    username: ''
  }
  handlAddUser = () => {
    if (!this.state.username) return
    this.props.userActions.addUser(this.state.username);
    this.setState({
      username: ''
    })
  }
  render () {
    return (
      <div className="page-header text-center">
        <input type="text" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
        <button type="button" className="btn btn-primary" onClick={this.handlAddUser}>添加用户</button>
        <ul>
          {
            this.props.user.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)