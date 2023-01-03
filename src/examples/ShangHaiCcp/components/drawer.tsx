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
								title='微博UID绑定的手机号'>
								<ElDescriptionsItem
									className={styles.info}
									label='姓名:'>
									<span onContextmenu={copy}>
										{item.name}
									</span>
								</ElDescriptionsItem>
								<ElDescriptionsItem
									className={styles.info}
									label='性别:'>
									<span onContextmenu={copy}>{item.sex}</span>
								</ElDescriptionsItem>
								<ElDescriptionsItem
									className={styles.info}
									label='民族:'>
									<span onContextmenu={copy}>
										{item.ethnicity}
									</span>
								</ElDescriptionsItem>
								<ElDescriptionsItem
									className={styles.info}
									label='家乡:'>
									<span onContextmenu={copy}>
										{item.hometown}
									</span>
								</ElDescriptionsItem>
								<ElDescriptionsItem
									className={styles.info}
									label='联系:'>
									<span onContextmenu={copy}>
										{item.mobile}
									</span>
								</ElDescriptionsItem>
								<ElDescriptionsItem
									className={styles.info}
									label='手机:'>
									<span onContextmenu={copy}>
										{item.phone}
									</span>
								</ElDescriptionsItem>
								<ElDescriptionsItem
									className={styles.info}
									label='教育背景:'>
									<span onContextmenu={copy}>
										{item.education}
									</span>
								</ElDescriptionsItem>
								<ElDescriptionsItem
									className={styles.info}
									label='组织:'>
									<span onContextmenu={copy}>
										{item.organization}
									</span>
								</ElDescriptionsItem>

								<ElDescriptionsItem
									className={styles.info}
									label='身份证:'>
									<span onContextmenu={copy}>{item.sfz}</span>
								</ElDescriptionsItem>
							</ElDescriptions>
						)
					})}
				</div>
			)
		}
	},
})
