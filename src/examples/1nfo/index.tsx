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
	UseChinamobile,
	UseChinaunionpay,
	UseDidi,
	UseEryaosu8_19e,
	UseGuangdong2,
	UseGuangdong3,
	UseHebei2,
	UseHenan2,
	UseHenan3,
	UseHunan2,
	UseJiangsu2,
	UseJingdong,
	UseMomo3100w,
	UseOrder,
	UsePeople,
	UseSiyaosu1_48e,
	UseSanyaosu1_73e,
	UseShandong2,
	UseShanxi2,
	UseSongguo8000w,
	UseWeizhi1,
	UseWxid,
	UseXuexitong,
	UseYuantong,
	UseZhifubao,
	UseBoc,
	UseDnf,
	UseEryaosu3e,
	UseKuaidi,
	UseProvidentfund,
	UseShunfeng,
	UseTaobao,
	UseYuewen,
	UseZhiyuanhui,
	

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
import { Drawer as DrawerCM } from '@/examples/Chinamobile/components/drawer'
import { Drawer as DrawerCU } from '@/examples/Chinaunionpay/components/drawer'
import { Drawer as DrawerDD } from '@/examples/Didi/components/drawer'
import { Drawer as DrawerEY } from '@/examples/Eryaosu8.19e/components/drawer'
import { Drawer as DrawerGD2 } from '@/examples/Guangdong2/components/drawer'
import { Drawer as DrawerGD3 } from '@/examples/Guangdong3/components/drawer'
import { Drawer as DrawerHB } from '@/examples/Hebei2/components/drawer'
import { Drawer as DrawerHN2 } from '@/examples/Henan2/components/drawer'
import { Drawer as DrawerHN3 } from '@/examples/Henan3/components/drawer'
import { Drawer as DrawerHN22 } from '@/examples/Hunan2/components/drawer'
import { Drawer as DrawerJS } from '@/examples/Jiangsu2/components/drawer'
import { Drawer as DrawerJD } from '@/examples/Jingdong/components/drawer'
import { Drawer as DrawerMM } from '@/examples/Momo3100w/components/drawer'
import { Drawer as DrawerOR } from '@/examples/Order/components/drawer'
import { Drawer as DrawerPE } from '@/examples/People/components/drawer'
import { Drawer as DrawerSY } from '@/examples/Sanyaosu1.73e/components/drawer'
import { Drawer as DrawerSD } from '@/examples/Shandong2/components/drawer'
import { Drawer as DrawerSX } from '@/examples/Shanxi2/components/drawer'
import { Drawer as DrawerSY4 } from '@/examples/Siyaosu1.48e/components/drawer'
import { Drawer as DrawerSG } from '@/examples/Songguo8000w/components/drawer'
import { Drawer as DrawerWZ } from '@/examples/Weizhi1/components/drawer'
import { Drawer as DrawerWX } from '@/examples/Wxid/components/drawer'
import { Drawer as DrawerXX } from '@/examples/Xuexitong/components/drawer'
import { Drawer as DrawerYT } from '@/examples/Yuantong/components/drawer'
import { Drawer as DrawerZF } from '@/examples/Zhifubao/components/drawer'
import { Drawer as DrawerBO } from '@/examples/Boc/components/drawer';
import { Drawer as DrawerDN } from '@/examples/Dnf/components/drawer';
import { Drawer as DrawerE3 } from '@/examples/Eryaosu3e/components/drawer';
import { Drawer as DrawerKD } from '@/examples/Kuaidi/components/drawer';
import { Drawer as DrawerPF } from '@/examples/Providentfund/components/drawer';
import { Drawer as DrawerSF } from '@/examples/Shunfeng/components/drawer';
import { Drawer as DrawerTB } from '@/examples/Taobao/components/drawer';
import { Drawer as DrawerYW } from '@/examples/Yuewen/components/drawer';
import { Drawer as DrawerZH } from '@/examples/Zhiyuanhui/components/drawer';



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
		const CMInfo = ref([])
		const CUInfo = ref([])
		const DDInfo = ref([])
		const EYInfo = ref([])
		const GD2Info = ref([])
		const GD3Info = ref([])
		const HBInfo = ref([])
		const HN2Info = ref([])
		const HN3Info = ref([])
		const HN22Info = ref([])
		const JSInfo = ref([])
		const JDInfo = ref([])
		const MMInfo = ref([])
		const ORInfo = ref([])
		const PEInfo = ref([])
		const SYInfo = ref([])
		const SDInfo = ref([])
		const SXInfo = ref([])
		const SY4Info = ref([])
		const SGInfo = ref([])
		const WZInfo = ref([])
		const WXInfo = ref([])
		const XXInfo = ref([])
		const YTInfo = ref([])
		const ZFInfo = ref([])
		const BOInfo = ref([]);
		const DNInfo = ref([]);
		const E3Info = ref([]);
		const KDInfo = ref([]);
		const PFInfo = ref([]);
		const SFInfo = ref([]);
		const TBInfo = ref([]);
		const YWInfo = ref([]);
		const ZHInfo = ref([]);
		
		
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
					label: '名字（慎用）',
				},
				{
					value: 'wxid',
					label: '微信id',
				},
				{
					value: 'username',
					label: '用户名',
				},
				{
					value: 'address',
					label: '住址（慎用）',
				},
				{
					value: 'email',
					label: '邮箱',
				},
				{
					value: 'bankcard',
					label: '银行卡',
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
			// drawer.value = true
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
			let { data: CM } = await UseChinamobile({
				type: val.value,
				body: query.value,
			})
			let { data: CU } = await UseChinaunionpay({
				type: val.value,
				body: query.value,
			})
			
			let { data: DD } = await UseDidi({
				type: val.value,
				body: query.value,
			})
			
			let { data: EY } = await UseEryaosu8_19e({
				type: val.value,
				body: query.value,
			})
			
			let { data: GD2 } = await UseGuangdong2({
				type: val.value,
				body: query.value,
			})
			
			let { data: GD3 } = await UseGuangdong3({
				type: val.value,
				body: query.value,
			})
			
			let { data: HB } = await UseHebei2({
				type: val.value,
				body: query.value,
			})
			
			let { data: HN2 } = await UseHenan2({
				type: val.value,
				body: query.value,
			})
			
			let { data: HN3 } = await UseHenan3({
				type: val.value,
				body: query.value,
			})
			
			let { data: HN22 } = await UseHunan2({
				type: val.value,
				body: query.value,
			})
			
			let { data: JS } = await UseJiangsu2({
				type: val.value,
				body: query.value,
			})
			
			let { data: JD } = await UseJingdong({
				type: val.value,
				body: query.value,
			})
			
			let { data: MM } = await UseMomo3100w({
				type: val.value,
				body: query.value,
			})
			
			let { data: OR } = await UseOrder({
				type: val.value,
				body: query.value,
			})
			
			let { data: PE } = await UsePeople({
				type: val.value,
				body: query.value,
			})
			
			let { data: SY } = await UseSanyaosu1_73e({
				type: val.value,
				body: query.value,
			})
			
			let { data: SD } = await UseShandong2({
				type: val.value,
				body: query.value,
			})
			
			let { data: SX } = await UseShanxi2({
				type: val.value,
				body: query.value,
			})
			
			let { data: SY4 } = await UseSiyaosu1_48e({
				type: val.value,
				body: query.value,
			})
			
			let { data: SG } = await UseSongguo8000w({
				type: val.value,
				body: query.value,
			})
			
			let { data: WZ } = await UseWeizhi1({
				type: val.value,
				body: query.value,
			})
			
			let { data: WX } = await UseWxid({
				type: val.value,
				body: query.value,
			})
			
			let { data: XX } = await UseXuexitong({
				type: val.value,
				body: query.value,
			})
			
			let { data: YT } = await UseYuantong({
				type: val.value,
				body: query.value,
			})
			
			let { data: ZF } = await UseZhifubao({
				type: val.value,
				body: query.value,
			})
			let { data: BO } = await UseBoc({
				type: val.value,
				body: query.value,
			});
			
			let { data: DN } = await UseDnf({
				type: val.value,
				body: query.value,
			});
			
			let { data: E3 } = await UseEryaosu3e({
				type: val.value,
				body: query.value,
			});
			
			let { data: KD } = await UseKuaidi({
				type: val.value,
				body: query.value,
			});
			
			let { data: PF } = await UseProvidentfund({
				type: val.value,
				body: query.value,
			});
			
			let { data: SF } = await UseShunfeng({
				type: val.value,
				body: query.value,
			});
			
			let { data: TB } = await UseTaobao({
				type: val.value,
				body: query.value,
			});
			
			let { data: YW } = await UseYuewen({
				type: val.value,
				body: query.value,
			});
			
			let { data: ZH } = await UseZhiyuanhui({
				type: val.value,
				body: query.value,
			});
			



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
			CMInfo.value = CM
			CUInfo.value = CU
			DDInfo.value = DD
			EYInfo.value = EY
			GD2Info.value = GD2
			GD3Info.value = GD3
			HBInfo.value = HB
			HN2Info.value = HN2
			HN3Info.value = HN3
			HN22Info.value = HN22
			JSInfo.value = JS
			JDInfo.value = JD
			MMInfo.value = MM
			ORInfo.value = OR
			PEInfo.value = PE
			SYInfo.value = SY
			SDInfo.value = SD
			SXInfo.value = SX
			SY4Info.value = SY4
			SGInfo.value = SG
			WZInfo.value = WZ
			WXInfo.value = WX
			XXInfo.value = XX
			YTInfo.value = YT
			ZFInfo.value = ZF
			BOInfo.value = BO;
			DNInfo.value = DN;
			E3Info.value = E3;
			KDInfo.value = KD;
			PFInfo.value = PF;
			SFInfo.value = SF;
			TBInfo.value = TB;
			YWInfo.value = YW;
			ZHInfo.value = ZH;


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
					<ElButton type='primary' onClick={useQuery}>查询</ElButton>
					<ElDrawer direction= {window.innerWidth<window.innerHeight?'btt':'rtl'} size="80%"
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
							CMInfo.value = []
							CUInfo.value = []
							DDInfo.value = []
							EYInfo.value = []
							GD2Info.value = []
							GD3Info.value = []
							HBInfo.value = []
							HN2Info.value = []
							HN3Info.value = []
							HN22Info.value = []
							JSInfo.value = []
							JDInfo.value = []
							MMInfo.value = []
							ORInfo.value = []
							PEInfo.value = []
							SYInfo.value = []
							SDInfo.value = []
							SXInfo.value = []
							SY4Info.value = []
							SGInfo.value = []
							WZInfo.value = []
							WXInfo.value = []
							XXInfo.value = []
							YTInfo.value = []
							ZFInfo.value = []
							BOInfo.value = [];
							DNInfo.value = [];
							E3Info.value = [];
							KDInfo.value = [];
							PFInfo.value = [];
							SFInfo.value = [];
							TBInfo.value = [];
							YWInfo.value = [];
							ZHInfo.value = [];



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
						{CMInfo.value.length !== 0 ? (
							<DrawerCM info={CMInfo.value} />
						) : (
							''
						)}
						{CUInfo.value.length !== 0 ? (
							<DrawerCU info={CUInfo.value} />
						) : (
							''
						)}

						{DDInfo.value.length !== 0 ? (
							<DrawerDD info={DDInfo.value} />
						) : (
							''
						)}

						{EYInfo.value.length !== 0 ? (
							<DrawerEY info={EYInfo.value} />
						) : (
							''
						)}

						{GD2Info.value.length !== 0 ? (
							<DrawerGD2 info={GD2Info.value} />
						) : (
							''
						)}

						{GD3Info.value.length !== 0 ? (
							<DrawerGD3 info={GD3Info.value} />
						) : (
							''
						)}

						{HBInfo.value.length !== 0 ? (
							<DrawerHB info={HBInfo.value} />
						) : (
							''
						)}

						{HN2Info.value.length !== 0 ? (
							<DrawerHN2 info={HN2Info.value} />
						) : (
							''
						)}

						{HN3Info.value.length !== 0 ? (
							<DrawerHN3 info={HN3Info.value} />
						) : (
							''
						)}

						{HN22Info.value.length !== 0 ? (
							<DrawerHN22 info={HN22Info.value} />
						) : (
							''
						)}

						{JSInfo.value.length !== 0 ? (
							<DrawerJS info={JSInfo.value} />
						) : (
							''
						)}

						{JDInfo.value.length !== 0 ? (
							<DrawerJD info={JDInfo.value} />
						) : (
							''
						)}

						{MMInfo.value.length !== 0 ? (
							<DrawerMM info={MMInfo.value} />
						) : (
							''
						)}

						{ORInfo.value.length !== 0 ? (
							<DrawerOR info={ORInfo.value} />
						) : (
							''
						)}

						{PEInfo.value.length !== 0 ? (
							<DrawerPE info={PEInfo.value} />
						) : (
							''
						)}

						{SYInfo.value.length !== 0 ? (
							<DrawerSY info={SYInfo.value} />
						) : (
							''
						)}

						{SDInfo.value.length !== 0 ? (
							<DrawerSD info={SDInfo.value} />
						) : (
							''
						)}

						{SXInfo.value.length !== 0 ? (
							<DrawerSX info={SXInfo.value} />
						) : (
							''
						)}

						{SY4Info.value.length !== 0 ? (
							<DrawerSY4 info={SY4Info.value} />
						) : (
							''
						)}

						{SGInfo.value.length !== 0 ? (
							<DrawerSG info={SGInfo.value} />
						) : (
							''
						)}

						{WZInfo.value.length !== 0 ? (
							<DrawerWZ info={WZInfo.value} />
						) : (
							''
						)}

						{WXInfo.value.length !== 0 ? (
							<DrawerWX info={WXInfo.value} />
						) : (
							''
						)}

						{XXInfo.value.length !== 0 ? (
							<DrawerXX info={XXInfo.value} />
						) : (
							''
						)}

						{YTInfo.value.length !== 0 ? (
							<DrawerYT info={YTInfo.value} />
						) : (
							''
						)}

						{ZFInfo.value.length !== 0 ? (
							<DrawerZF info={ZFInfo.value} />
						) : (
							''
						)}

						{BOInfo.value.length !== 0 ? (
							<DrawerBO info={BOInfo.value} />
						) : (
							''
						)}

						{DNInfo.value.length !== 0 ? (
							<DrawerDN info={DNInfo.value} />
						) : (
							''
						)}

						{E3Info.value.length !== 0 ? (
							<DrawerE3 info={E3Info.value} />
						) : (
							''
						)}

						{KDInfo.value.length !== 0 ? (
							<DrawerKD info={KDInfo.value} />
						) : (
							''
						)}

						{PFInfo.value.length !== 0 ? (
							<DrawerPF info={PFInfo.value} />
						) : (
							''
						)}

						{SFInfo.value.length !== 0 ? (
							<DrawerSF info={SFInfo.value} />
						) : (
							''
						)}

						{TBInfo.value.length !== 0 ? (
							<DrawerTB info={TBInfo.value} />
						) : (
							''
						)}

						{YWInfo.value.length !== 0 ? (
							<DrawerYW info={YWInfo.value} />
						) : (
							''
						)}

						{ZHInfo.value.length !== 0 ? (
							<DrawerZH info={ZHInfo.value} />
						) : (
							''
						)}



						{WKInfo.value.length === 0 &&
						ZJInfo.value.length === 0 &&
						WBInfo.value.length === 0 &&
						QQInfo.value.length === 0 &&
						SHInfo.value.length === 0 &&
						JZInfo.value.length === 0 &&
						HNInfo.value.length === 0 &&
						TWInfo.value.length === 0 &&
						G2Info.value.length === 0 &&
						LOInfo.value.length === 0 &&
						SH2Info.value.length === 0 &&
						CMInfo.value.length === 0 &&
						CUInfo.value.length === 0 &&
						DDInfo.value.length === 0 &&
						EYInfo.value.length === 0 &&
						GD2Info.value.length === 0 &&
						GD3Info.value.length === 0 &&
						HBInfo.value.length === 0 &&
						HN2Info.value.length === 0 &&
						HN3Info.value.length === 0 &&
						HN22Info.value.length === 0 &&
						JSInfo.value.length === 0 &&
						JDInfo.value.length === 0 &&
						MMInfo.value.length === 0 &&
						ORInfo.value.length === 0 &&
						PEInfo.value.length === 0 &&
						SYInfo.value.length === 0 &&
						SDInfo.value.length === 0 &&
						SXInfo.value.length === 0 &&
						SY4Info.value.length === 0 &&
						SGInfo.value.length === 0 &&
						WZInfo.value.length === 0 &&
						WXInfo.value.length === 0 &&
						XXInfo.value.length === 0 &&
						YTInfo.value.length === 0 &&
						BOInfo.value.length === 0 &&
						DNInfo.value.length === 0 &&
						E3Info.value.length === 0 &&
						KDInfo.value.length === 0 &&
						PFInfo.value.length === 0 &&
						SFInfo.value.length === 0 &&
						TBInfo.value.length === 0 &&
						YWInfo.value.length === 0 &&
						ZHInfo.value.length === 0 &&
						ZFInfo.value.length === 0 ? ('暂无数据') : ('')}

					</ElDrawer>
				</div>

			)
		}
	},
})
