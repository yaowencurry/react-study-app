import { SAVE_MUSIC_LIST, PLAY_MUSIC_STATE } from "../../utils/consts/music";


const music = {
  music: (state = [], actions) => {
    switch (actions.type) {
      case SAVE_MUSIC_LIST:
        return actions.list
      default:
        return state
    }
  },
  isPlay: (state = false, actions) => {
    switch (actions.type) {
      case PLAY_MUSIC_STATE:
        return actions.state
      default:
        return state
    }
  }
}

export default music
