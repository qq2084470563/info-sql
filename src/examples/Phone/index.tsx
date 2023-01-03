import { defineComponent, ref } from 'vue'
import { ElOption, ElSelect, ElInput, ElButton, ElDrawer } from 'element-plus'
import styles from './style.module.scss'
import {
	UseShangHaiCcp,
	UseQQ,
	UseWB,
	UseZhejiangSchool,
	UseWK,
} from '@/api/SocialEngineering'
import { Drawer as DrawerSh } from '@/examples/ShangHaiCcp/components/drawer'
import { Drawer as DrawerQQ } from '@/examples/QQ/components/drawer'
import { Drawer as DrawerWB } from '@/examples/WB/components/drawer'
import { Drawer as DrawerZJ } from '@/examples/ZhejiangSchool/components/drawer'
import { Drawer as DrawerWK } from '@/examples/WKSchool/components/drawer'
export const Phone = defineComponent({
	setup() {
		// 定义变量
		const val = ref('phone')
		const query = ref('')
		const drawer = ref(false)
		const SHInfo = ref([])
		const QQInfo = ref([])
		const WBInfo = ref([])
		const ZJInfo = ref([])
		const WKInfo = ref([])
		function useParams() {
			const options = [
				{
					value: 'phone',
					label: '手机号',
				},
				// {
				// 	value: 'sfz',
				// 	label: '身份证',
				// },
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
			let { data: SH } = await UseShangHaiCcp({
				type: val.value,
				body: query.value,
			})
			let { data: QQ } = await UseQQ({
				type: val.value,
				body: query.value,
			})
			let { data: WB } = await UseWB({
				type: val.value,
				body: query.value,
			})
			let { data: ZJ } = await UseZhejiangSchool({
				type: val.value,
				body: query.value,
			})
			let { data: WK } = await UseWK({
				type: val.value,
				body: query.value,
			})
			console.log(QQ)
			SHInfo.value = SH
			QQInfo.value = QQ
			WBInfo.value = WB
			ZJInfo.value = ZJ
			WKInfo.value = WK
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
							SHInfo.value = []
							QQInfo.value = []
							WBInfo.value = []
							ZJInfo.value = []
							WKInfo.value = []
						}}>
						{SHInfo.value.length !== 0 ? (
							<DrawerSh info={SHInfo.value} />
						) : (
							// '暂无上海共产党数据'
							''
						)}
						{QQInfo.value.length !== 0 ? (
							<DrawerQQ info={QQInfo.value} />
						) : (
							// '暂无QQ数据'
							''
						)}
						{WBInfo.value.length !== 0 ? (
							<DrawerWB info={WBInfo.value} />
						) : (
							// '暂无WB数据'
							''
						)}
						{ZJInfo.value.length !== 0 ? (
							<DrawerZJ info={ZJInfo.value} />
						) : (
							// '暂无WB数据'
							''
						)}
						{WKInfo.value.length !== 0 ? (
							<DrawerWK info={WKInfo.value} />
						) : (
							// '暂无WK数据'
							''
						)}
					</ElDrawer>
				</div>
			)
		}
	},
})
