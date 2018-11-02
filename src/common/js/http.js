'use strict'
import axios from 'axios'

axios.interceptors.request.use(config => {
    // 发送请求  所有的请求都会走这里
    return config
}, error => {
    return Promise.reject(error)
})
axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.resolve(error.response)
})
function checkStatus(response, This) {
    // 如果http状态码正常，则直接返回数据
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        return response
    }
}
let baseURL= 'http://test.bthhotels.com:60000';
function checkCode(res, This) {
    if (res.data.code === 402||res.data.code === 500||res.data.code==506) {
        This.$root.isMask=true;
        This.$root.isError=res.data.message;
        return;
    }
    // token 过期  或则错误
    else if (res.data.Code == 401) {  
        window.location.href = 'https://login.bthhotels.com/login/index?returnUrl=' + encodeURIComponent(window.location.href)
    }else{
        return res;
    }
}
export default {
    post(url, data, This) {     
        return axios({
            method: 'post',
            baseURL: baseURL,
            url:url,
            data,
            timeout: 50000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(
            (response) => {
                return checkStatus(response, This)
            }
        ).then(
            (res) => {
                return checkCode(res, This)
            }
        )
    },
    get(url, params, This) {
        return axios({
            method: 'get',
            baseURL: baseURL,
            url:url,
            params,
            // get 请求时带的参数
            timeout: 50000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(
            (response) => {
                return checkStatus(response, This)
            }
        ).then(
            (res) => {
                return checkCode(res, This)
            }
        )
    }
}

