import * as counterActions from "../const/const";

const counter = (state = 0, action) => {
  switch (action.type) {
    case counterActions.INCREMENT:
      return state + action.num
    case counterActions.DECREMENT:
      return state - action.num
    default:
      return state
  }
}

export default counter