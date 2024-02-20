import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App'
import './layout.css'

import { MyRouteType } from './mytypes'

const examples = import.meta.glob([
	'./examples/**/*.*sx',
	'!./**/components/**/*.*sx',
])
const examplePromises = Object.keys(examples)
	.map((x) => examples[x])
	.map((f) => f())
const routes: MyRouteType[] = []

Promise.all(examplePromises).then((list) => {
	for (let moduleY of list) {
		let module = moduleY as any
		for (let key in module) {
			const Component = module[key]
			routes.push({
				path: '/' + key.toLocaleLowerCase(),
				key,
				component: Component,
			})
		}
	}
	console.log(routes);
	
	routes.push({
		path: '/',
		redirect: routes[0]?.path,
	})
	const router = createRouter({
		history: createWebHashHistory(),
		routes,
	})
	const app = createApp(App, { routes })
	app.use(router)
	app.mount('#app')
})
