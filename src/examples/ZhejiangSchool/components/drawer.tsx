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
								title='数据来源：浙江省学籍1100w'>
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
									label='学校:'
									span={2}>
									<span onContextmenu={copy}>
										{item.school}
									</span>
								</ElDescriptionsItem>
								<ElDescriptionsItem
									className={styles.info}
									label='班级:'
									span={2}>
									<span onContextmenu={copy}>
										{item.banji}
									</span>
								</ElDescriptionsItem>
								<ElDescriptionsItem
									className={styles.info}
									label='监护人:'>
									<span onContextmenu={copy}>
										{item.parentName}
									</span>
								</ElDescriptionsItem>
								<ElDescriptionsItem
									className={styles.info}
									label='监护人手机:'
									span={2}>
									<span onContextmenu={copy}>
										{item.parentPhone}
									</span>
									{/* {phone(item.parentPhone)} */}
								</ElDescriptionsItem>
								<ElDescriptionsItem
									className={styles.info}
									label='住址'
									span={2}>
									<span onContextmenu={copy}>
										{item.city + item.address}
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
