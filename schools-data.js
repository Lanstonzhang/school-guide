// 惠州学校详细数据
const huizhouSchools = {
    // 惠州市普通高中
    highSchools: [
        {
            id: 1,
            name: "惠州市第一中学",
            type: "重点高中",
            location: "惠城区",
            established: 1929,
            scoreRequirement: { min: 620, max: 680, average: 650 },
            features: ["广东省一级学校", "国家级示范性普通高中", "高考重点率连续多年全市第一", "拥有省级名师工作室5个"],
            advantages: ["学术氛围浓厚，师资力量强大", "高考成绩突出，985/211录取率高", "校园设施完善，实验室设备先进", "社团活动丰富，学生全面发展"],
            disadvantages: ["学习压力较大，竞争激烈", "录取分数要求高", "学费相对较高"],
            specialties: [
                { name: "理科实验班", description: "重点培养理工科人才" },
                { name: "文科创新班", description: "注重人文素养培养" },
                { name: "国际班", description: "对接海外名校" }
            ],
            contact: { address: "惠州市惠城区南坛路28号", phone: "0752-2234567", website: "http://www.hz1z.edu.cn" },
            ownership: "公立",
            ranking: 1
        },
        {
            id: 2,
            name: "惠州市实验中学",
            type: "特色高中",
            location: "惠城区",
            established: 1978,
            scoreRequirement: { min: 600, max: 670, average: 635 },
            features: ["艺术、体育特色鲜明", "多元发展平台", "创新人才培养模式"],
            advantages: ["特色教育突出，适合特长发展", "校园文化活跃，学生个性得到尊重", "国际交流项目多", "升学途径多样化"],
            disadvantages: ["学术压力依然较大", "特色课程可能占用部分学习时间"],
            specialties: [
                { name: "艺术班", description: "美术、音乐专业培养" },
                { name: "体育班", description: "体育特长生培养" },
                { name: "科技创新班", description: "科技创新能力培养" }
            ],
            contact: { address: "惠州市惠城区麦地路28号", phone: "0752-2234666", website: "http://www.hzssyzx.edu.cn" },
            ownership: "公立",
            ranking: 2
        }
    ],
    
    // 惠州市中专/职高/技工学校（全市范围）
    vocationalSchools: [
        {
            id: 101,
            name: "惠州工程技术学校",
            type: "工科中专",
            location: "惠城区",
            established: 1978,
            scoreRequirement: { min: 400, max: 520, average: 460 },
            features: ["广东省重点中等职业学校", "校企合作示范单位", "工科专业实力雄厚"],
            advantages: ["工科专业实力强，就业率高", "校企合作深入，实习机会多", "学费相对较低，有国家补贴", "技能证书多，就业竞争力强"],
            disadvantages: ["理论学习相对较少", "工作环境可能较艰苦", "职业发展天花板相对较低"],
            specialties: [
                { name: "机电技术应用", description: "培养机电设备维修技术人员" },
                { name: "汽车运用与维修", description: "汽车维修保养技术" },
                { name: "建筑工程施工", description: "建筑施工技术与管理" }
            ],
            contact: { address: "惠州市惠城区马安镇", phone: "0752-2234777", website: "http://www.hzgczx.edu.cn" },
            ownership: "公立",
            ranking: 1
        },
        {
            id: 102,
            name: "惠州卫生学校",
            type: "卫生中专",
            location: "惠城区",
            established: 1958,
            scoreRequirement: { min: 420, max: 530, average: 475 },
            features: ["广东省重点卫生学校", "医护人才培养基地", "实训设备先进"],
            advantages: ["医护专业就业稳定", "社会需求大，工作稳定", "实训条件好，实践能力强", "有继续升学通道"],
            disadvantages: ["学习压力大，要求严格", "工作强度大，责任重", "需要持续学习更新知识"],
            specialties: [
                { name: "护理", description: "临床护理、社区护理" },
                { name: "医学检验技术", description: "医学检验、实验室技术" },
                { name: "药剂", description: "药品调剂、管理" }
            ],
            contact: { address: "惠州市惠城区鹅岭南路31号", phone: "0752-2234888", website: "http://www.hzwsxx.edu.cn" },
            ownership: "公立",
            ranking: 2
        }
    ],
    
    // 惠州市技工学校（全市范围）
    technicalSchools: [
        // 惠城区
        {
            id: 201,
            name: "惠州市技师学院",
            type: "高级技工",
            location: "惠城区",
            established: 1979,
            scoreRequirement: { min: 300, max: 450, average: 380 },
            features: ["国家级重点技工院校", "高技能人才培养基地", "世界技能大赛培训基地"],
            advantages: ["技术培训全面，技能证书多", "校企合作深入，就业有保障", "国家补贴多，学费负担轻", "技术工人需求大，就业容易"],
            disadvantages: ["工作环境可能较艰苦", "职业发展天花板相对较低"],
            specialties: [
                { name: "模具制造", description: "模具设计、制造、维修", employment: "模具制造企业", salary: "5000-12000元/月", skillLevel: "高级工" },
                { name: "电气自动化", description: "电气设备安装调试维护", employment: "工厂、电力公司", salary: "4500-10000元/月", skillLevel: "中级工" },
                { name: "烹饪（中式烹调）", description: "中式菜肴制作", employment: "酒店、餐厅", salary: "4000-15000元/月", skillLevel: "中级工" },
                { name: "数控加工", description: "数控机床编程操作", employment: "机械制造企业", salary: "4800-11000元/月", skillLevel: "高级工" }
            ],
            contact: { address: "惠州市惠城区马安镇", phone: "0752-2234222", website: "http://www.hzjsxy.edu.cn" },
            detailed_description: "惠州市技师学院是国家级重点技工院校，广东省高技能人才培养示范基地。学院拥有现代化的实训基地，与世界500强企业建立了深度合作关系，毕业生就业率连续多年保持在98%以上。",
            facilities: ["数控加工中心", "模具制造实训室", "电气自动化实验室", "烹饪实训中心", "汽车维修实训基地"],
            certifications: ["高级工证书", "技师证书", "特种作业操作证", "ISO认证"],
            ownership: "公立",
            ranking: 1
        },
        {
            id: 202,
            name: "惠州科技技工学校",
            type: "科技技工",
            location: "惠城区",
            established: 2005,
            scoreRequirement: { min: 280, max: 420, average: 350 },
            features: ["科技类专业特色鲜明", "新兴技术人才培养", "创业孵化基地"],
            advantages: ["专业设置紧跟科技发展", "创业支持力度大", "学习氛围相对轻松", "就业方向多样化"],
            disadvantages: ["办学历史相对较短", "师资力量相对薄弱"],
            specialties: [
                { name: "计算机应用与维修", description: "计算机硬件维护、网络管理", employment: "IT公司、企事业单位", salary: "4000-9000元/月", skillLevel: "中级工" },
                { name: "无人机应用技术", description: "无人机操控、维护、应用", employment: "测绘、农业、影视公司", salary: "5000-12000元/月", skillLevel: "中级工" },
                { name: "3D打印技术应用", description: "3D建模、打印操作", employment: "制造企业、设计公司", salary: "4500-10000元/月", skillLevel: "中级工" },
                { name: "物联网应用技术", description: "物联网设备安装调试", employment: "智能家居、物联网公司", salary: "4200-9500元/月", skillLevel: "中级工" }
            ],
            contact: { address: "惠州市惠城区水口街道", phone: "0752-2234555", website: "http://www.hzkjjsxx.edu.cn" },
            detailed_description: "惠州科技技工学校专注于培养科技型技能人才，开设无人机、3D打印、物联网等前沿专业。学校与多家科技企业合作，为学生提供实习和就业机会。",
            facilities: ["无人机实训室", "3D打印实验室", "物联网实训平台", "计算机维修中心"],
            certifications: ["中级工证书", "无人机操作证", "计算机等级证书"],
            ownership: "私立",
            ranking: 2
        },
        {
            id: 203,
            name: "惠州建筑工程技工学校",
            type: "建筑技工",
            location: "惠城区",
            established: 1990,
            scoreRequirement: { min: 290, max: 410, average: 350 },
            features: ["建筑专业特色", "施工实训基地", "建筑企业合作多"],
            advantages: ["建筑行业需求大", "实践机会多", "技能实用性强", "就业稳定"],
            disadvantages: ["工作环境艰苦", "户外作业多", "季节性影响"],
            specialties: [
                { name: "建筑施工", description: "建筑施工技术", employment: "建筑公司、工地", salary: "4500-10000元/月", skillLevel: "中级工" },
                { name: "建筑装饰", description: "室内外装饰装修", employment: "装修公司、设计公司", salary: "4000-12000元/月", skillLevel: "中级工" },
                { name: "工程造价", description: "工程预算、成本控制", employment: "造价咨询公司、建筑企业", salary: "4000-11000元/月", skillLevel: "中级工" },
                { name: "工程测量", description: "工程测量、放线", employment: "测绘公司、建筑企业", salary: "4200-10000元/月", skillLevel: "中级工" }
            ],
            contact: { address: "惠州市惠城区河南岸", phone: "0752-2234666", website: "http://www.hzjzjsxx.edu.cn" },
            detailed_description: "惠州建筑工程技工学校是建筑行业技能人才培养的重要基地，拥有建筑施工、装饰装修、工程造价等特色专业。学校与多家建筑企业合作，实行订单式培养。",
            facilities: ["建筑施工实训场", "建筑装饰实训室", "工程造价实训室", "工程测量实训室"],
            certifications: ["中级工证书", "施工员证", "安全员证", "造价员证"],
            ownership: "私立",
            ranking: 3
        },
        {
            id: 204,
            name: "惠阳区技工学校",
            type: "综合技工",
            location: "惠阳区",
            established: 1985,
            scoreRequirement: { min: 270, max: 390, average: 330 },
            features: ["区域重点技工学校", "制造业人才培养", "校企合作紧密"],
            advantages: ["区域就业优势明显", "学费较低", "实践机会多", "就业稳定"],
            disadvantages: ["地理位置相对偏远", "专业选择相对较少"],
            specialties: [
                { name: "数控技术应用", description: "数控机床操作编程", employment: "制造企业", salary: "4200-9500元/月", skillLevel: "中级工" },
                { name: "电子技术应用", description: "电子产品装配维修", employment: "电子企业", salary: "3800-9000元/月", skillLevel: "中级工" },
                { name: "汽车维修", description: "汽车保养维修", employment: "汽修厂、4S店", salary: "4000-10000元/月", skillLevel: "中级工" },
                { name: "焊接技术应用", description: "焊接操作技术", employment: "制造企业、工地", salary: "4500-11000元/月", skillLevel: "中级工" }
            ],
            contact: { address: "惠州市惠阳区淡水街道", phone: "0752-2234777", website: "http://www.hyqjsxx.edu.cn" },
            detailed_description: "惠阳区技工学校是惠阳区重点技工院校，主要培养制造业急需的技能人才。学校实行校企合作，毕业生主要输送到惠阳区及周边地区的制造企业。",
            facilities: ["数控实训中心", "电子实训室", "汽车维修实训场", "焊接实训室"],
            certifications: ["中级工证书", "特种作业操作证"],
            ownership: "公立",
            ranking: 4
        },
        {
            id: 205,
            name: "博罗县技工学校",
            type: "农村技工",
            location: "博罗县",
            established: 1995,
            scoreRequirement: { min: 250, max: 370, average: 310 },
            features: ["农村劳动力培训基地", "农业技术推广", "扶贫技能培训"],
            advantages: ["学费低廉，有补贴", "学习压力相对较小", "就业方向明确", "适合农村学生"],
            disadvantages: ["教学设施相对简陋", "专业选择有限", "师资力量相对薄弱"],
            specialties: [
                { name: "农业机械使用与维护", description: "农机操作维修", employment: "农机站、农业合作社", salary: "3500-8000元/月", skillLevel: "初级工" },
                { name: "农村电气技术", description: "农村电网维护", employment: "供电所、农村电工", salary: "3800-8500元/月", skillLevel: "初级工" },
                { name: "农村经济综合管理", description: "农村经济管理", employment: "村委会、农业企业", salary: "3000-7000元/月", skillLevel: "初级工" },
                { name: "农产品保鲜与加工", description: "农产品加工技术", employment: "食品加工企业", salary: "3500-8000元/月", skillLevel: "初级工" }
            ],
            contact: { address: "惠州市博罗县罗阳街道", phone: "0752-2234888", website: "http://www.blxjsxx.edu.cn" },
            detailed_description: "博罗县技工学校主要为农村劳动力提供技能培训，开设农业机械、电工、焊工等实用专业。学校享受国家扶贫政策支持，学费低廉。",
            facilities: ["农业机械实训场", "电工实训室", "焊工实训室", "农产品加工实训室"],
            certifications: ["初级工证书", "特种作业操作证"],
            ownership: "公立",
            ranking: 5
        },
        {
            id: 206,
            name: "惠东县技工学校",
            type: "旅游技工",
            location: "惠东县",
            established: 2000,
            scoreRequirement: { min: 260, max: 380, average: 320 },
            features: ["旅游服务人才培养", "滨海旅游特色", "服务技能培训"],
            advantages: ["旅游行业前景好", "工作环境相对较好", "学习内容有趣", "就业机会多"],
            disadvantages: ["季节性影响明显", "工作强度大", "薪资波动较大"],
            specialties: [
                { name: "旅游服务与管理", description: "旅游接待服务", employment: "旅行社、景区", salary: "35001-9000元/月", skillLevel: "中级工" },
                { name: "酒店服务与管理", description: "酒店前台、客房服务", employment: "酒店、度假村", salary: "3800-9500元/月", skillLevel: "中级工" },
                { name: "烹饪（西式烹调）", description: "西餐制作", employment: "西餐厅、酒店", salary: "4000-12000元/月", skillLevel: "中级工" },
                { name: "导游", description: "旅游讲解服务", employment: "旅行社", salary: "3000-15000元/月", skillLevel: "中级工" }
            ],
            contact: { address: "惠州市惠东县平山街道", phone: "0752-2234999", website: "http://www.hdxjsxx.edu.cn" },
            detailed_description: "惠东县技工学校依托惠东滨海旅游资源，重点培养旅游服务类技能人才。学校与巽寮湾、双月湾等景区合作，为学生提供实习岗位。",
            facilities: ["旅游实训室", "酒店服务实训室", "西餐烹饪实训室", "导游模拟实训室"],
            certifications: ["中级工证书", "导游证", "厨师证"],
            ownership: "公立",
            ranking: 6
        },
        {
            id: 207,
            name: "大亚湾石化技工学校",
            type: "石化技工",
            location: "大亚湾区",
            established: 2008,
            scoreRequirement: { min: 310, max: 430, average: 370 },
            features: ["石化专业特色", "安全生产培训", "石化企业合作"],
            advantages: ["石化行业薪资高", "就业稳定", "专业性强", "发展前景好"],
            disadvantages: ["工作环境有风险", "要求严格", "需要持续培训"],
            specialties: [
                { name: "石油化工", description: "石化生产操作", employment: "石化企业", salary: "5000-15000元/月", skillLevel: "高级工" },
                { name: "化工仪表及自动化", description: "化工仪表维护", employment: "石化企业", salary: "4800-13000元/月", skillLevel: "中级工" },
                { name: "化工机械维修", description: "化工设备维修", employment: "石化企业", salary: "4500-12000元/月", skillLevel: "中级工" },
                { name: "工业分析与检验", description: "化工产品检验", employment: "质检部门、石化企业", salary: "4200-11000元/月", skillLevel: "中级工" }
            ],
            contact: { address: "惠州市大亚湾区石化大道", phone: "0752-2234111", website: "http://www.dywshjsxx.edu.cn" },
            detailed_description: "大亚湾石化技工学校是大亚湾石化区的配套人才培养基地，专门为石化企业培养技术工人。学校实行严格的安全生产培训，毕业生供不应求。",
            facilities: ["石化仿真实训室", "化工仪表实训室", "化工机械实训室", "分析检验实验室"],
            certifications: ["高级工证书", "特种作业操作证", "安全生产证书"],
            ownership: "公立",
            ranking: 7
        },
        {
            id: 208,
            name: "仲恺高新区技工学校",
            type: "高新技工",
            location: "仲恺区",
            established: 2012,
            scoreRequirement: { min: 290, max: 410, average: 350 },
            features: ["高新技术人才培养", "智能制造培训", "创新创业教育"],
            advantages: ["高新区就业优势", "专业设置前沿", "创业支持多", "发展空间大"],
            disadvantages: ["办学历史较短", "学费相对较高", "竞争压力大"],
            specialties: [
                { name: "工业机器人应用与维护", description: "工业机器人编程维护", employment: "智能制造企业", salary: "4500-12000元/月", skillLevel: "高级工" },
                { name: "智能制造技术应用", description: "智能制造系统操作", employment: "制造企业", salary: "4200-11000元/月", skillLevel: "中级工" },
                { name: "电子商务", description: "网店运营、电商推广", employment: "电商企业", salary: "3800-10000元/月", skillLevel: "中级工" },
                { name: "计算机网络应用", description: "网络搭建维护", employment: "IT公司、企事业单位", salary: "4000-11000元/月", skillLevel: "中级工" }
            ],
            contact: { address: "惠州市仲恺高新区惠风路", phone: "0752-2234222", website: "http://www.zkjsxx.edu.cn" },
            detailed_description: "仲恺高新区技工学校为高新区内的高新技术企业培养技能人才，开设电子技术、智能制造等专业。学校与企业深度合作，实行工学交替培养模式。",
            facilities: ["工业机器人实训室", "智能制造实训中心", "电子商务实训室", "网络技术实训室"],
            certifications: ["高级工证书", "机器人操作证", "电子商务师证"],
            ownership: "公立",
            ranking: 8
        },
        {
            id: 209,
            name: "惠州现代技工学校",
            type: "现代技工",
            location: "惠城区",
            established: 2007,
            scoreRequirement: { min: 270, max: 390, average: 330 },
            features: ["现代服务业培训", "职业技能鉴定", "就业创业指导"],
            advantages: ["专业设置现代", "就业渠道广", "创业支持多", "学习灵活"],
            disadvantages: ["办学历史较短", "师资力量一般", "管理相对松散"],
            specialties: [
                { name: "现代物流", description: "物流仓储管理", employment: "物流公司、电商企业", salary: "3800-9000元/月", skillLevel: "中级工" },
                { name: "健康服务与管理", description: "健康管理服务", employment: "养老院、健康中心", salary: "3500-8500元/月", skillLevel: "初级工" },
                { name: "美容美发与造型", description: "美容美发技术", employment: "美容院、发廊", salary: "3000-15000元/月", skillLevel: "中级工" },
                { name: "汽车美容与装潢", description: "汽车美容装饰", employment: "汽车美容店、4S店", salary: "3500-10000元/月", skillLevel: "初级工" }
            ],
            contact: { address: "惠州市惠城区江北街道", phone: "0752-2234333", website: "http://www.hzxdjsxx.edu.cn" },
            detailed_description: "惠州现代技工学校是一所民办技工学校，注重现代服务业技能人才培养。学校开设汽车服务、电子商务、现代物流等热门专业。",
            facilities: ["物流实训室", "健康服务实训室", "美容美发实训室", "汽车美容实训室"],
            certifications: ["中级工证书", "美容师证", "物流员证"],
            ownership: "私立",
            ranking: 9
        },
        {
            id: 210,
            name: "惠州艺术技工学校",
            type: "艺术技工",
            location: "惠城区",
            established: 2015,
            scoreRequirement: { min: 240, max: 360, average: 300 },
            features: ["艺术技能培训", "文化创意产业", "非遗传承基地"],
            advantages: ["艺术特色鲜明", "创意产业前景好", "学习内容有趣", "适合有艺术特长的学生"],
            disadvantages: ["就业面相对较窄", "收入不稳定", "需要天赋和持续练习"],
            specialties: [
                { name: "工艺美术", description: "工艺品设计制作", employment: "工艺美术企业、工作室", salary: "3000-12000元/月", skillLevel: "中级工" },
                { name: "服装设计与制作", description: "服装设计制作", employment: "服装企业、设计工作室", salary: "3500-15000元/月", skillLevel: "中级工" },
                { name: "动漫游戏设计", description: "动漫游戏美术设计", employment: "动漫公司、游戏公司", salary: "4000-20000元/月", skillLevel: "中级工" },
                { name: "珠宝首饰设计与制作", description: "珠宝设计制作", employment: "珠宝企业、工作室", salary: "3500-18000元/月", skillLevel: "中级工" }
            ],
            contact: { address: "惠州市惠城区桥东街道", phone: "0752-2234444", website: "http://www.hzysjsxx.edu.cn" },
            detailed_description: "惠州艺术技工学校专注于艺术类技能人才培养，开设工艺美术、服装设计、动漫设计等专业，培养文化创意产业急需的技能人才。",
            facilities: ["工艺美术实训室", "服装设计实训室", "动漫设计实训室", "珠宝设计实训室"],
            certifications: ["中级工证书", "工艺美术师证", "设计师证"],
            ownership: "私立",
            ranking: 10
        }
    ]
};

// 筛选学校函数
function filterSchools(criteria) {
    const results = {
        highSchools: [],
        vocationalSchools: [],
        technicalSchools: []
    };
    
    // 筛选普通高中
    if (criteria.type === 'all' || criteria.type === 'high-school') {
        results.highSchools = huizhouSchools.highSchools.filter(school => {
            return school.scoreRequirement.average <= criteria.score + 50 &&
                   school.scoreRequirement.average >= criteria.score - 50;
        });
    }
    
    // 筛选中专/职高
    if (criteria.type === 'all' || criteria.type === 'vocational') {
        results.vocationalSchools = huizhouSchools.vocationalSchools.filter(school => {
            return school.scoreRequirement.average <= criteria.score + 30 &&
                   school.scoreRequirement.average >= criteria.score - 30;
        });
    }
    
    // 筛选技工学校
    if (criteria.type === 'all' || criteria.type === 'technical') {
        results.technicalSchools = huizhouSchools.technicalSchools.filter(school => {
            return school.scoreRequirement.average <= criteria.score + 20 &&
                   school.scoreRequirement.average >= criteria.score - 20;
        });
    }
    
    return results;
}

// 获取学校详情
function getSchoolDetails(type, id) {
    switch(type) {
        case 'high-school':
            return huizhouSchools.highSchools.find(school => school.id === id);
        case 'vocational':
            return huizhouSchools.vocationalSchools.find(school => school.id === id);
        case 'technical':
            return huizhouSchools.technicalSchools.find(school => school.id === id);
        default:
            return null;
    }
}

// 按区域筛选学校
function getSchoolsByLocation(location) {
    const results = {
        highSchools: huizhouSchools.highSchools.filter(school => school.location.includes(location)),
        vocationalSchools: huizhouSchools.vocationalSchools.filter(school => school.location.includes(location)),
        technicalSchools: huizhouSchools.technicalSchools.filter(school => school.location.includes(location))
    };
    return results;
}

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        huizhouSchools,
        filterSchools,
        getSchoolDetails,
        getSchoolsByLocation
    };
}