import axios, { AxiosRequestConfig } from 'axios'
import { MyApiConfig } from '@/mytypes'
import { defaultConfig as config } from '@/config'
class http {
	private url
	private timeout
	constructor(address: MyApiConfig = {}, timeout: number = 60000) {
		this.url = { ...config, ...address }
		this.timeout = timeout
	}
	public request = () => {
		const headers = {}
		const { host = '', port = '', path = '' } = this.url
		const baseURL = host + port + path
		const instance = axios.create({
			baseURL,
			timeout: this.timeout,
			headers,
		})
		instance.interceptors.request.use(function (config) {
			const { data, params, headers, method } = config
			config.method = method
			config.data = data
			config.params = params
			config.headers = { ...headers }

			return config
		})
		instance.interceptors.response.use(
			function (response) {
				return response
			},
			function (error) {
				// 超出 2xx 范围的状态码都会触发该函数。
				// 对响应错误做点什么
				return Promise.reject(error)
			}
		)
		return instance
	}
}

export default http
