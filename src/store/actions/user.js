import { ADD_USER, FETCH_USER_REQUEST, FETCH_USER_ERROR } from "../const/const";

export function addUser(username) {
  return {
    type: ADD_USER,
    username
  }
}
export function fetchUserRequest() {
  return {
    type: FETCH_USER_REQUEST
  }
}

export function fetchUserError() {
  return {
    type: FETCH_USER_ERROR
  }
}

export function getUser() {
  return dispatch => {
    dispatch(fetchUserRequest());
    fetch('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php')
      .then(res => res.json())
      .then(data => {
        dispatch(addUser(data.chengpinDetails[0].title))
      })
      .catch(err=>{
        dispatch(fetchUserError())
      })
  }
}