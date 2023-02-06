import { defineComponent, ref } from 'vue'
import { ElOption, ElSelect, ElInput, ElButton, ElDrawer } from 'element-plus'
import styles from './style.module.scss'
import { UseTwiTter } from '@/api/SocialEngineering'
import { Drawer } from './components/drawer'
export const TwiTter = defineComponent({
	setup() {
		// 定义变量
		const val = ref('email')
		const query = ref('')
		const drawer = ref(false)
		const info = ref([])
		function useParams() {
			const options = [
				{
					value: 'email',
					label: '邮箱',
				},
				{
					value: 'twitter',
					label: '用户名或者@handle',
				},
			]
			return options.map((item) => (
				<ElOption
					key={item.value}
					label={item.label}
					value={item.value}></ElOption>
			))
		}

		// 查询按钮逻辑
		async function useQuery() {
			console.log(query.value)
			const { data } = await UseTwiTter({
				type: val.value,
				body: query.value,
			})

			info.value = data
			console.log(data)
			drawer.value = true
		}

		return () => {
			return (
				<div>
					<div class={styles.form}>
						<ElSelect
							model-value={val.value}
							onChange={(vale) => {
								val.value = vale
								query.value = ''
							}}>
							{useParams()}
						</ElSelect>
						<ElInput
							onInput={(val) => (query.value = val)}
							modelValue={query.value}
							placeholder='请输入相关信息进行查询'></ElInput>
					</div>
					<ElButton onClick={useQuery}>查询</ElButton>
					<ElDrawer
						modelValue={drawer.value}
						onClose={() => {
							drawer.value = false
							info.value = []
						}}>
						{info.value.length !== 0 ? (
							<Drawer info={info.value} />
						) : (
							'暂无数据'
						)}
					</ElDrawer>
				</div>
			)
		}
	},
})
