import * as counterActions from "../const/const";

export function increment (num = 1) {
  return {
    type: counterActions.INCREMENT,
    num
  }
}

export function decrement (num = 1) {
  return {
    type: counterActions.DECREMENT,
    num
  }
}