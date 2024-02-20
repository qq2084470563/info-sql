import { defineComponent, ref } from 'vue'
import { ElOption, ElSelect, ElInput, ElButton, ElDrawer } from 'element-plus'
import styles from './style.module.scss'
import {
	UseShangHaiCcp,
	UseQQ,
	UseWB,
	UseZhejiangSchool,
	UseWK,
	UseJizhu800w,
	UseTwiTter,
	UseHunanSchool,
	UseG2700w,
	UseKFC,
	UseLOL,
	UseShangHai10e,

} from '@/api/SocialEngineering'
import { Drawer as DrawerSh } from '@/examples/ShangHaiCcp/components/drawer'
import { Drawer as DrawerQQ } from '@/examples/QQ/components/drawer'
import { Drawer as DrawerWB } from '@/examples/WB/components/drawer'
import { Drawer as DrawerZJ } from '@/examples/ZhejiangSchool/components/drawer'
import { Drawer as DrawerWK } from '@/examples/WKSchool/components/drawer'
import { Drawer as DrawerJZ } from '@/examples/Jizhu800w/components/drawer'
import { Drawer as DrawerTW } from '@/examples/TwiTter/components/drawer'
import { Drawer as DrawerHN } from '@/examples/HunanSchool/components/drawer'
import { Drawer as DrawerG2 } from '@/examples/G2700w/components/drawer'
import { Drawer as DrawerKF } from '@/examples/KFC/components/drawer'
import { Drawer as DrawerLO } from '@/examples/LOL/components/drawer'
import { Drawer as DrawerSH2 } from '@/examples/ShangHai10e/components/drawer'


export const info = defineComponent({
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
		const JZInfo = ref([])
		const TWInfo = ref([])
		const HNInfo = ref([])
		const G2Info = ref([])
		const KFInfo = ref([])
		const LOInfo = ref([])
		const SH2Info = ref([])

		function useParams() {
			const options = [
				{
					value: 'phone',
					label: '手机号',
				},
				{
					value: 'sfz',
					label: '身份证',
				},
				{
					value: 'qq',
					label: 'QQ号',
				},
				{
					value: 'weibo',
					label: '微博id',
				},
				{
					value: 'name',
					label: '名字',
				},
				{
					value: 'email',
					label: '邮箱',
				},
				{
					value: 'twitter',
					label: 'twitter用户名或者@handle',
				},
				{
					value: 'lol',
					label: 'lol用户名',
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
			drawer.value = true
			let { data: SH } = await UseShangHaiCcp({
				type: val.value,
				body: query.value,
			})
			let { data: SH2 } = await UseShangHai10e({
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
			let { data: JZ } = await UseJizhu800w({
				type: val.value,
				body: query.value,
			})
			let { data: TW } = await UseTwiTter({
				type: val.value,
				body: query.value,
			})
			let { data: HN } = await UseHunanSchool({
				type: val.value,
				body: query.value,
			})
			let { data: G2 } = await UseG2700w({
				type: val.value,
				body: query.value,
			})
			let { data: KF } = await UseKFC({
				type: val.value,
				body: query.value,
			})
			let { data: LO } = await UseLOL({
				type: val.value,
				body: query.value,
			})

			console.log(QQ)
			SHInfo.value = SH
			QQInfo.value = QQ
			WBInfo.value = WB
			ZJInfo.value = ZJ
			WKInfo.value = WK
			JZInfo.value = JZ
			HNInfo.value = HN
			TWInfo.value = TW
			G2Info.value = G2
			KFInfo.value = KF
			LOInfo.value = LO
			SH2Info.value = SH2
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
					<ElDrawer direction= {window.innerWidth<window.innerHeight?'btt':'rtl'}
						modelValue={drawer.value}
						onClose={() => {
							drawer.value = false
							SHInfo.value = []
							QQInfo.value = []
							WBInfo.value = []
							ZJInfo.value = []
							WKInfo.value = []
							JZInfo.value = []
							HNInfo.value = []
							TWInfo.value = []
							G2Info.value = []
							KFInfo.value = []
							LOInfo.value = []
							SH2Info.value = []
							
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
						{JZInfo.value.length !== 0 ? (
							<DrawerJZ info={JZInfo.value} />
						) : (
							''
						)}
						{HNInfo.value.length !== 0 ? (
							<DrawerHN info={HNInfo.value} />
						) : (
							''
						)}
						{TWInfo.value.length !== 0 ? (
							<DrawerTW info={TWInfo.value} />
						) : (
							''
						)}
						{G2Info.value.length !== 0 ? (
							<DrawerG2 info={G2Info.value} />
						) : (
							''
						)}
						{G2Info.value.length !== 0 ? (
							<DrawerKF info={KFInfo.value} />
						) : (
							''
						)}
						{LOInfo.value.length !== 0 ? (
							<DrawerLO info={LOInfo.value} />
						) : (
							''
						)}
						{SH2Info.value.length !== 0 ? (
							<DrawerSH2 info={SH2Info.value} />
						) : (
							''
						)}

						{WKInfo.value.length == 0 && ZJInfo.value.length == 0 && WBInfo.value.length == 0 && QQInfo.value.length == 0 && SHInfo.value.length == 0 && JZInfo.value.length == 0 && HNInfo.value.length == 0 && TWInfo.value.length == 0 && G2Info.value.length == 0 && LOInfo.value.length == 0 && SH2Info.value.length == 0 ? ('暂无数据'):('')}
					</ElDrawer>
				</div>
			)
		}
	},
})
