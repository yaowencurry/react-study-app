import axios from 'axios';
import { BASE_URL } from '../consts';

export function getRequest(url) {
    return new Promise((resolve, reject) => {
        axios.get(BASE_URL + url)
            .then(res => {
                if (res.data.code === 200) {
                    resolve(res)
                } else {
                    return res
                }
            })
            .catch(err => {
                return err
            })
    })

}

export function postRequest(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(BASE_URL + url, params)
            .then(res => {
                if (res.data.code === 200) {
                    resolve(res)
                } else {
                    resolve(res)
                }
            })
            .catch(err => {
                reject(err)
            })
    })
}