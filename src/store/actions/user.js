import { ADD_USER } from "../const/const";

export function addUser (username) {
  return {
    type: ADD_USER,
    username
  }
}
