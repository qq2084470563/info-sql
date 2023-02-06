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
// 800w机主
export const UseJizhu800w = (data: any = {}) => {
	return request({
		url: '/search/800wjizhu',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

// 湖南学籍159w
export const UseHunanSchool = (data: any = {}) => {
	return request({
		url: '/search/hunanstudent',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

// 推特
export const UseTwiTter = (data: any = {}) => {
	return request({
		url: '/search/twitter',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

// 2700w
export const UseG2700w = (data: any = {}) => {
	return request({
		url: '/search/2700w',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

// kfc 500w
export const UseKFC = (data: any = {}) => {
	return request({
		url: '/search/kfc',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

// lol_bind
export const UseLOL = (data: any = {}) => {
	return request({
		url: '/search/lol',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}
