import { defineComponent, ref } from 'vue'
import {
	ElDrawer,
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
		const phone = (telephone: String) => {
			const phone = []
			for (let i = 0; i < telephone.length / 11; i++) {
				phone.push(
					<span onContextmenu={copy}>
						{telephone.slice(i * 11, (i + 1) * 11)}
						<br />
					</span>
				)
			}
			return phone
		}
		return () => {
			return (
				<div>
					{info!.map((item) => {
						return (
							<ElDescriptions
								column={2}
								border
								title='学籍信息详情'>
								<ElDescriptionsItem
									className={styles.info}
									label='姓名:'>
									<span onContextmenu={copy}>
										{item.name}
									</span>
								</ElDescriptionsItem>
								<ElDescriptionsItem
									className={styles.info}
									label='身份证:'>
									<span onContextmenu={copy}>{item.sfz}</span>
								</ElDescriptionsItem>

								<ElDescriptionsItem
									className={styles.info}
									label='性别:'>
									<span onContextmenu={copy}>{item.sex}</span>
								</ElDescriptionsItem>
								<ElDescriptionsItem
									className={styles.info}
									label='学号:'>
									<span onContextmenu={copy}>
										{item.studentID}
									</span>
								</ElDescriptionsItem>

								<ElDescriptionsItem
									className={styles.info}
									label='本人手机:'>
									<span onContextmenu={copy}>
										{item.phone}
									</span>
								</ElDescriptionsItem>
								<ElDescriptionsItem
									className={styles.info}
									label='监护人手机:'>
									{phone(item.parentPhone)}
								</ElDescriptionsItem>
								<ElDescriptionsItem
									className={styles.info}
									label='住址'
									span={2}>
									<span onContextmenu={copy}>
										{item.address}
									</span>
								</ElDescriptionsItem>
								<ElDescriptionsItem
									className={styles.info}
									label='学籍'>
									<span onContextmenu={copy}>
										{item.education}
									</span>
								</ElDescriptionsItem>
								<ElDescriptionsItem
									className={styles.info}
									label='班级'>
									<span onContextmenu={copy}>
										{item.banji}
									</span>
								</ElDescriptionsItem>
							</ElDescriptions>
						)
					})}
				</div>
			)
		}
	},
})
