import http from './apiConfig'
const api = new http()
const request = api.request()
// 浙江省学籍数据
export const UseZhejiangSchool = (data: any = {}) => {
	return request({
		url: '/search/zhejiangstudent',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}
// QQ数据
export const UseQQ = (data: any = {}) => {
	return request({
		url: '/search/qban',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}
// 微博数据
export const UseWB = (data: any = {}) => {
	return request({
		url: '/search/weibo',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}
// 温科学生数据
export const UseWK = (data: any = {}) => {
	return request({
		url: '/search/wk',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}
// 上海共产党员
export const UseShangHaiCcp = (data: any = {}) => {
	return request({
		url: '/search/shanghaiccp',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}
