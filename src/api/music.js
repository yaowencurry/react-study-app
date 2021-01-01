import { postRequest, getRequest } from '../utils/axios/index';

const MUSICAPI = {
  //用户歌单
  getUserPlayList: (data) => postRequest('/user/playlist', data),
  getDayRecommendList: () => getRequest('/recommend/songs')
}

export default MUSICAPI