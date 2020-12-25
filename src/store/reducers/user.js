import { ADD_USER } from "../const/const";

const user = (state = [], actions) => {
  switch (actions.type) {
    case ADD_USER:
      return [...state, actions.username]
    default:
      return state
  }
}

export default user
