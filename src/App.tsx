import { RouterLink, RouterView } from 'vue-router'
import { MyRouteType } from './mytypes'
import { routesName } from './dict'
export default (props: { routes: MyRouteType[] }) => {
	return (
		<>
			<header>
				<h2>Micro社工</h2>
			</header>
			<div class='body'>
				<el-menu
					default-active='2'
					class='el-menu-vertical-demo'></el-menu>
				<ul class='menu'>
					{props.routes.map((x) => {
						return (
							<li key={x.key}>
								<RouterLink to={x.path}>
									{routesName[x.key!]}
								</RouterLink>
							</li>
						)
					})}
				</ul>
				<div class='content'>
					<RouterView />
				</div>
			</div>
		</>
	)
}
