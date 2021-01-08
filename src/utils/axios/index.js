import axios from 'axios';
import { BASE_URL } from '../consts';

axios.defaults.withCredentials = true;
export function getRequest (url, data) {
    return new Promise((resolve, reject) => {
        axios({
            url: BASE_URL + url + '?timestamp=' + new Date().getTime(),
            withCredentials: true,
            method: 'get',
            params: data
        }).then(res => {
            if (res.status === 200) {
                resolve(res.data || 'ok')
            } else {
                resolve(res.data || 'ok')
            }
        })
            .catch(err => {
                return err
            })
    })

}

export function postRequest (url, params) {
    return new Promise((resolve, reject) => {
        axios.post(BASE_URL + url + '?timestamp=' + new Date().getTime(), params,)
            .then(res => {
                if (res.status === 200) {
                    resolve(res.data || 'ok')
                } else {
                    resolve(res.data || 'ok')
                }
            })
            .catch(err => {
                reject(err)
            })
    })
}