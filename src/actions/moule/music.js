import { SAVE_MUSIC_LIST, PLAY_MUSIC_STATE } from "../../utils/consts/music";
import MUSICAPI from '../../api/music'

export function saveMusicList (list) {
  return {
    type: SAVE_MUSIC_LIST,
    list
  }
}

export function hanldeMusicPlayState (state) {
  return {
    type: PLAY_MUSIC_STATE,
    state
  }
}

export function saveMusicIds (ids) {
  return dispatch => {
    MUSICAPI.getMusicUrl({ id: ids })
      .then(res => {
        if (res) {
          dispatch(saveMusicList(res.data))
          dispatch(hanldeMusicPlayState(true))
        }
      })
  }
}