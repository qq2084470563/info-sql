import { defineComponent, ref } from 'vue'
import {
	ElDescriptions,
	ElDescriptionsItem,
	ElNotification,
} from 'element-plus'
import styles from './drawer.module.scss'
export const Drawer = defineComponent({
	props: {
		info: {
			type: Array<any>,
		},
	},

	setup({ info }) {
		const copy = (e: Event) => {
			e.preventDefault()
			const ele = e.target as Element
			console.log()
			if (navigator.clipboard === undefined) {
				return ElNotification({
					title: '复制成功',
					message: `浏览器为给予权限，无法调用剪切板....`,
					dangerouslyUseHTMLString: true,
					duration: 2000,
					type: 'error',
				})
			}
			navigator.clipboard.writeText(ele.textContent!)
			ElNotification({
				title: '复制成功',
				message: `<span style="color:teal">成功复制内容'${ele.textContent!}'</span>`,
				dangerouslyUseHTMLString: true,
				duration: 2000,
				type: 'success',
			})
		}
		return () => {
			return (
				<div>
					{info!.map((item) => {
						return (
							<ElDescriptions
								column={2}
								border
								title='数据来源：微信3亿'>
								<ElDescriptionsItem
									className={styles.info}
									label='微信id:'>
									<span onContextmenu={copy}>{item.wxid}</span>
								</ElDescriptionsItem>
								<ElDescriptionsItem
									className={styles.info}
									label='手机号:'>
									<span onContextmenu={copy}>
										{item.phone}
									</span>
								</ElDescriptionsItem>
							</ElDescriptions>
						)
					})}
					<br></br><br></br><br></br>
				</div>
				
			)
		}
	},
})
