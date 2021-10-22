import axios, {
    AxiosInstance,
    AxiosResponse,
    AxiosRequestConfig,
    AxiosError
} from 'axios'

import UserModule from '@/store/modules/user'
import { getModule } from 'vuex-module-decorators'
import Vue from 'vue'
import router from '../router/index'
import { AUTH_ERROR_CODE_LIST } from '@/data/httpData'
import { SPECIAL_URL_LIST } from '../data/httpData'
export default abstract class HttpClient {
    protected readonly instance: AxiosInstance

    public constructor(baseURL = '/api', timeout = 1000 * 30) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
        // 请求拦截器
        this._initializeRequestInterceptor()
        // 响应拦截器
        this._initializeResponseInterceptor()
    }
    private _initializeRequestInterceptor = () => {
        this.instance.interceptors.request.use(
            this._handleRequest,
            this._handleError
        )
    }
    //请求拦截器
    private _handleRequest = (config: AxiosRequestConfig) => {
        const USER = getModule(UserModule)
        config.headers['authorization'] = USER.token
        return config
    }
    private _initializeResponseInterceptor = () => {
        this.instance.interceptors.response.use(
            this._handleResponse,
            this._handleError
        )
    }
    // 响应拦截器
    private _handleResponse = (response: AxiosResponse) => {
        const { data, headers } = response

        //1.--处理响应的token
        const token = headers['authorization']
        if (token) {
            this._saveToken(token)
        }
        //2. -- 特殊请求(例如响应数据是二进制的接口)，不处理响应码，直接返回数据
        const url = response.config.url as string
        if (SPECIAL_URL_LIST.includes(url)) {
            return Promise.resolve(data)
        }

        //3. --处理响应码
        const code = String(data.code),
            message = data.message
        const isSucceed = this._handleResCode(code, message, url)
        if (isSucceed) {
            return Promise.resolve(data)
        } else {
            return Promise.reject(message)
        }
    }
    private _saveToken(token: string) {
        const USER = getModule(UserModule)
        USER.setToken(token)
    }
    private _handleResCode(code: string, message: string, url: string) {
        if (code === '0') {
            // 请求成功
            return true
        } else if (AUTH_ERROR_CODE_LIST.includes(code)) {
            // token失效,跳回登录界面
            Vue.prototype.$message.error('身份信息过期，请重新登陆')
            router.push({ name: 'login' })
            return false
        } else {
            // 其他情况，统统提示message信息
            Vue.prototype.$message.error(url + ':' + message)
            return false
        }
    }

    protected _handleError = (error: AxiosError) => Promise.reject(error)
}
