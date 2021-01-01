import { LOGIN_SUBMIT, SAVE_LOGIN_STATE, GET_USER_INFO } from "../../utils/consts/user";


const userInfo = sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : {}

let initData = {
  isLogin: Object.keys(userInfo).length > 0,
  ...userInfo
}

const user = (state = initData, actions) => {
  const userInfo = sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : {};
  const data = JSON.parse(JSON.stringify({ ...userInfo, isLogin: Object.keys(userInfo).length > 0 }))
  switch (actions.type) {
    case LOGIN_SUBMIT:
      return data
    case SAVE_LOGIN_STATE:
      return JSON.parse(JSON.stringify({ ...userInfo, isLogin: actions.state }))
    case GET_USER_INFO:
      return data
    default:
      return state
  }
}

export const loginState = (state = false, actions) => {
  switch (actions.type) {
    case 'CHANGESTATE':
      return actions.state
    default:
      return state
  }
}

export default user
