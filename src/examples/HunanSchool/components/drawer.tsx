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
								title='数据来源：湖南省学籍159w'>
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
									label='手机:'>
									<span onContextmenu={copy}>
										{item.phone}
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
									label='院系名称:'>
									<span onContextmenu={copy}>
										{item.department}
									</span>
								</ElDescriptionsItem>
								<ElDescriptionsItem
									className={styles.info}
									label='学校:'>
									<span onContextmenu={copy}>
										{item.school}
									</span>
									{/* {phone(item.parentPhone)} */}
								</ElDescriptionsItem>
								<ElDescriptionsItem
									className={styles.info}
									label='年级:'>
									<span onContextmenu={copy}>
										{item.grade}
									</span>
								</ElDescriptionsItem>
								<ElDescriptionsItem
									className={styles.info}
									label='班级'>
									<span onContextmenu={copy}>
										{item.banji}
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
					<br></br><br></br><br></br>
				</div>
			)
		}
	},
})
