import { postRequest, getRequest } from '../utils/axios/index';

const MUSICAPI = {
  //用户歌单
  getUserPlayList: (data) => postRequest('/user/playlist', data),
  getDayRecommendList: () => getRequest('/recommend/songs'),
  getMusicUrl: (id) => getRequest('/song/url', id),
  getHotMusicTagList: () => getRequest('/playlist/hot'),
  getHotMusicList: (data) => postRequest('/top/playlist', data),
  getTopMusicList: () => getRequest('/top/playlist'),
  getPlayListDetail: (data) => getRequest('/playlist/detail', data),
}

export default MUSICAPI