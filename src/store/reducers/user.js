import { ADD_USER, FETCH_USER_REQUEST, FETCH_USER_ERROR } from "../const/const";

const initData = {
  username: '',
  isFetchRequest: false,
  isError: false
}

const user = (state = initData, actions) => {
  switch (actions.type) {
    case ADD_USER:
      return {
        username: actions.username,
        isFetchRequest: false,
        isError: false
      }
    case FETCH_USER_REQUEST:
      return {
        username: '12312323123',
        isFetchRequest: true,
        isError: false
      }
    case FETCH_USER_ERROR:
      return {
        username: '',
        isFetchRequest: false,
        isError: true
      }
    default:
      return state
  }
}

export default user
