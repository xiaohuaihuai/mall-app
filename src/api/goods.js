const goodsList = [
    {
        id: '1',
        type: 'television',
        storeName: '小米官方旗舰店',
        title: 'Redmi红米电视',
        desc: '70英寸震撼巨屏 / 4K画质 细腻如真 / 杜比音效 身临其境 /  \n' +
            '   PatchWall智能系统 内置小爱同学 / 海量好内容 / U盘文件直读 轻松办 \n' +
            '   公 / 无线投屏分享更方便\n' +
            '   屏幕尺寸：70英寸\n' +
            '   分辨率：4K超高清\n' +
            '   处理器：64位四核\n' +
            '   存储：2GB+16GB\n' +
            '   HDMI：3个',
        price: 2999,
        thumb: require('@/assets/images/xiaomi1.png')
    },
    {
        id: '2',
        type: 'television',
        storeName: '小米官方旗舰店',
        title: '小米全面屏电视E65A',
        desc: '全面屏设计 / 4K超高清 HDR / 纤薄机身 / 2GB+8GB大内存 / 64位四核处 \n' +
            '  理器 / 内置小爱同学\n' +
            '  屏幕尺寸：65英寸\n' +
            '  分辨率：4K超高清\n' +
            '  处理器：64位四核\n' +
            '  存储：2GB+8GB\n' +
            '  HDMI：3个',
        price: 2799,
        thumb: require('@/assets/images/xiaomi2.png')
    },
    {
        id: '3',
        type: 'mobilePhone',
        storeName: '小米官方旗舰店',
        title: '小米 CC9 Pro',
        desc: '1亿像素主摄 / 全场景五摄像头 / 四闪光灯 / 3200万自拍 / 10 倍混合\n' +
            '   光学变焦，50倍数字变焦 / 5260mAh ⼤电量 / 标配 30W疾速快充 / ⼩\n' +
            '   米⾸款超薄屏下指纹 / 德国莱茵低蓝光认证 / 多功能NFC / 红外万能遥\n' +
            '   控 / 1216超线性扬声器\n' +
            '   五摄像头：10800万+2000万+1200万+500万+200万像素\n' +
            '   超长待机：5260mAh\n' +
            '   超大屏：6.47英寸\n' +
            '   屏幕分辨率：2340×1080\n' +
            '   极速畅玩：8GB\n' +
            '   存储容量：128GB\n' +
            '   CPU：骁龙730G\n' +
            '   运营商网络：4G全网通\n' +
            '   网络模式：双卡双待\n' +
            '   普通厚度：9.67mm',
        price: 2799,
        thumb: require('@/assets/images/xiaomi3.png')
    },
    {
        id: '4',
        type: 'mobilePhone',
        storeName: '小米官方旗舰店',
        title: '小米 CC9 8GB+256GB 美图定制版',
        desc: '100%美图相机，前置3200万，自拍美得更自然 / 索尼4800万超广角三\n' +
            '   摄，拍风景、建筑、多人合影，画面更震撼 / 美图经典人像，不修图也好\n' +
            '   看 / AI弱光人像，暗光环境也能拍出水光肌 / 全身美型，变美不变形 / \n' +
            '   4030mAh大电量，足够尽兴玩一天 / 美图定制仙女配色、轻薄机身 / 6.39\n' +
            '   英寸三星 AMOLED水滴屏 / 骁龙710处理器 / 第七代屏幕指纹解锁 / \n' +
            '   支持NFC和红外遥控\n' +
            '   三摄像头：4800万+800万+200万像素\n' +
            '   CPU：骁龙710\n' +
            '   超大屏：6.39英寸\n' +
            '   屏幕分辨率：2340×1080\n' +
            '   极速畅玩：8GB\n' +
            '   存储容量：256GB\n' +
            '   超长待机：4030mAh   运营商网络：4G全网通\n' +
            '   网络模式：双卡双待\n' +
            '   普通厚度：8.67mm',
        price: 1999,
        thumb: require('@/assets/images/xiaomi4.png')
    },
    {
        id: '5',
        type: 'notebookComputer',
        storeName: '小米官方旗舰店',
        title: 'RedmiBook 14 锐龙版',
        desc: '满血版锐龙 3000系列处理器 / 搭载Radeon Vega Graphics显卡 / 强劲\n' +
            '   散热系统 / 全新小米互传\n' +
            '   CPU：AMD R5\n' +
            '   显卡类型：集成显卡\n' +
            '   大内存：8GB\n' +
            '   含固态硬盘：256GB\n' +
            '   中等屏幕：14英寸\n' +
            '   屏幕分辨率：全高清屏\n' +
            '   待机时长：＞8小时\n' +
            '   重量：1.0~1.5kg\n' +
            '   厚度：便携轻薄',
        price: 3099,
        thumb: require('@/assets/images/xiaomi5.png')
    },
    {
        id: '6',
        type: 'appliances',
        storeName: '小米官方旗舰店',
        title: '米家互联网洗烘一体机10kg',
        desc: '国标最高A+级洗净能力 / 智能空气洗 / 烘干除菌率达99.9%+ / 高温筒自\n' +
            '   洁 / 一级能效，省水省电\n' +
            '   洗涤容量：10kg\n' +
            '   烘干容量：6kg\n' +
            '   尺寸：598*650*850\n' +
            '   排水方式：上排水\n' +
            '   电机类型：BLDC变频',
        price: 2099,
        thumb: require('@/assets/images/xiaomi6.png')
    },
    {
        id: '7',
        type: 'intelligentDevice',
        storeName: '小米官方旗舰店',
        title: '米家扫拖一体机器人',
        desc: '三种扫拖模式 / 智能电控水箱，呵护木地板 / LDS激光导航 / 米家APP\n' +
            '   远程操控 / 高精度传感器 / 软件虚拟墙，房间自动分区 /指哪儿扫哪儿 / \n' +
            '   2100Pa',
        price: 1899,
        thumb: require('@/assets/images/xiaomi7.png')
    },
    {
        id: '8',
        type: 'intelligentDevice',
        storeName: '小米官方旗舰店',
        title: '九号平衡车Plus',
        desc: '增强型镁合金底盘 / 35km 超长续航 / 一键自动跟随',
        price: 3199,
        thumb: require('@/assets/images/xiaomi8.png')
    }
];

export function queryGoodsList() {
    return goodsList;
}

export function queryGoodsById(id) {
    const res = goodsList.filter(goods => goods.id === id)
    return res.length === 1 ? res[0] : {};
}
