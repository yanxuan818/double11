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
    // 异常状态下，把错误信息返回去
    return {
        status: -404,
        msg: '网络异常'
    }
}
let baseURL= 'http://172.23.101.83/';
function checkCode(res, This) {
    
    if (res.status === -404) {
      
        This.$router.push({ path: '/err'})
         return
    }
    // token 过期  或则错误
    else if (res.data.Code == 99) {  
       
    }
    return res;
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

