import { SAVE_LOGIN_STATE, GET_USER_INFO } from "../../utils/consts/user";
import { LoginSubmit } from '../../api/common';

export function changeLoginState (action) {
  return {
    type: 'CHANGESTATE',
    state: true
  }
}

export function saveLoginState (state) {
  return {
    type: SAVE_LOGIN_STATE,
    state
  }
}

export function saveUserInfo (info) {
  return {
    type: GET_USER_INFO,
    userInfo: info
  }
}


export function login (data) {
  return dispatch => {
    LoginSubmit(data)
      .then((res) => {
        if (res) {
          sessionStorage.setItem('userInfo', JSON.stringify(res))
          dispatch(saveLoginState(true))
          dispatch(saveUserInfo(res))
        }
      })
  }
}