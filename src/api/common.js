import { getRequest } from '../utils/axios/index';

export const LoginSubmit = (data) => getRequest('/login/cellphone', data)
export const RefreshLogin = () => getRequest('/login/refresh')
export const getBannerList = () => getRequest('/banner')