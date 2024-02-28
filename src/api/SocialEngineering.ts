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

// 上海10亿
export const UseShangHai10e = (data: any = {}) => {
	return request({
		url: '/search/shanghai10e',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

// 中国移动1.5亿
export const UseChinamobile = (data: any = {}) => {
	return request({
		url: '/search/chinamobile',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

// 银联6.32亿
export const UseChinaunionpay = (data: any = {}) => {
	return request({
		url: '/search/chinaunionpay',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

// 滴滴出行6000万
export const UseDidi = (data: any = {}) => {
	return request({
		url: '/search/didi',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

// 二要素8.19亿
export const UseEryaosu8_19e = (data: any = {}) => {
	return request({
		url: '/search/eryaosu8.19e',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//广东二要素
export const UseGuangdong2 = (data: any = {}) => {
	return request({
		url: '/search/guangdong2',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//广东三要素
export const UseGuangdong3 = (data: any = {}) => {
	return request({
		url: '/search/guangdong3',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//河北二要素
export const UseHebei2 = (data: any = {}) => {
	return request({
		url: '/search/hebei2',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//河南二要素
export const UseHenan2 = (data: any = {}) => {
	return request({
		url: '/search/hebei2',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//河南三要素
export const UseHenan3 = (data: any = {}) => {
	return request({
		url: '/search/henan3',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//湖南二要素
export const UseHunan2 = (data: any = {}) => {
	return request({
		url: '/search/hunan2',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//江苏二要素
export const UseJiangsu2 = (data: any = {}) => {
	return request({
		url: '/search/Jiangsu2',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//京东13g数据
export const UseJingdong = (data: any = {}) => {
	return request({
		url: '/search/jingdong',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//陌陌3100万
export const UseMomo3100w = (data: any = {}) => {
	return request({
		url: '/search/momo3100w',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//order
export const UseOrder = (data: any = {}) => {
	return request({
		url: '/search/order',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//people
export const UsePeople = (data: any = {}) => {
	return request({
		url: '/search/people',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//三要素1.73亿
export const UseSanyaosu1_73e = (data: any = {}) => {
	return request({
		url: '/search/sanyaosu1.73e',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//山东二要素
export const UseShandong2 = (data: any = {}) => {
	return request({
		url: '/search/shandong2',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//陕西二要素
export const UseShanxi2 = (data: any = {}) => {
	return request({
		url: '/search/shanxi2',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//四要素1.48亿
export const UseSiyaosu1_48e = (data: any = {}) => {
	return request({
		url: '/search/siyaosu1.48e',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//松果8000w
export const UseSongguo8000w = (data: any = {}) => {
	return request({
		url: '/search/songguo8000w',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//未知1
export const UseWeizhi1 = (data: any = {}) => {
	return request({
		url: '/search/weizhi1',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//微信3亿
export const UseWxid = (data: any = {}) => {
	return request({
		url: '/search/wxid',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//学习通1.3亿
export const UseXuexitong = (data: any = {}) => {
	return request({
		url: '/search/xuexitong',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//圆通1亿
export const UseYuantong = (data: any = {}) => {
	return request({
		url: '/search/yuantong',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//支付宝10亿
export const UseZhifubao = (data: any = {}) => {
	return request({
		url: '/search/zhifubao',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//中国银行
export const UseBoc = (data: any = {}) => {
	return request({
		url: '/search/boc',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//dnf
export const UseDnf = (data: any = {}) => {
	return request({
		url: '/search/dnf',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//二要素3亿
export const UseEryaosu3e = (data: any = {}) => {
	return request({
		url: '/search/eryaosu3e',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//3622万快递数据
export const UseKuaidi = (data: any = {}) => {
	return request({
		url: '/search/kuaidi',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//公积金
export const UseProvidentfund = (data: any = {}) => {
	return request({
		url: '/search/providentfund',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//顺丰18g
export const UseShunfeng = (data: any = {}) => {
	return request({
		url: '/search/shunfeng',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//淘宝
export const UseTaobao = (data: any = {}) => {
	return request({
		url: '/search/taobao',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//中国阅文2200w
export const UseYuewen = (data: any = {}) => {
	return request({
		url: '/search/yuewen',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}

//志愿汇
export const UseZhiyuanhui = (data: any = {}) => {
	return request({
		url: '/search/zhiyuanhui',
		method: 'POST',
		data,
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
	})
}