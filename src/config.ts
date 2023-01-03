import { MyApiConfig } from '@/mytypes'
const env = 'online'
const host = {
	online: 'https://sgk.chenritian.com/',
	test: '',
	underline: '',
}

export const defaultConfig: MyApiConfig = {
	host: host[env],
}
