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
            scoreRequirement: {
                min: 620,
                max: 680,
                average: 650
            },
            features: [
                "广东省一级学校",
                "国家级示范性普通高中",
                "高考重点率连续多年全市第一",
                "拥有省级名师工作室5个"
            ],
            advantages: [
                "学术氛围浓厚，师资力量强大",
                "高考成绩突出，985/211录取率高",
                "校园设施完善，实验室设备先进",
                "社团活动丰富，学生全面发展"
            ],
            disadvantages: [
                "学习压力较大，竞争激烈",
                "录取分数要求高",
                "学费相对较高"
            ],
            specialties: [
                { name: "理科实验班", description: "重点培养理工科人才" },
                { name: "文科创新班", description: "注重人文素养培养" },
                { name: "国际班", description: "对接海外名校" }
            ],
            contact: {
                address: "惠州市惠城区南坛路28号",
                phone: "0752-2234567",
                website: "http://www.hz1z.edu.cn"
            },
            ownership: "公立",
            ranking: 1
        },
        {
            id: 2,
            name: "惠州市实验中学",
            type: "特色高中",
            location: "惠城区",
            established: 1994,
            scoreRequirement: {
                min: 580,
                max: 650,
                average: 610
            },
            features: [
                "广东省艺术教育特色学校",
                "体育传统项目学校",
                "科技创新示范学校"
            ],
            advantages: [
                "艺术教育特色突出，美术、音乐专业强",
                "体育设施完善，运动队成绩优异",
                "科技创新活动丰富，学生获奖多",
                "校园文化活跃，学生个性发展好"
            ],
            disadvantages: [
                "学术成绩相对一中稍弱",
                "艺术专业需要额外培训费用"
            ],
            specialties: [
                { name: "美术特长班", description: "专业美术培训，对接美院" },
                { name: "音乐特长班", description: "声乐、器乐专业培养" },
                { name: "体育特长班", description: "田径、篮球等专项训练" }
            ],
            contact: {
                address: "惠州市惠城区演达大道12号",
                phone: "0752-2234888",
                website: "http://www.hzssyzx.edu.cn"
            },
                        ownership: "公立",
            ranking: 2,
            ownership: "公立"
        },
        {
            id: 3,
            name: "惠阳高级中学",
            type: "优质高中",
            location: "惠阳区",
            established: 1954,
            scoreRequirement: {
                min: 560,
                max: 630,
                average: 590
            },
            features: [
                "广东省一级学校",
                "历史悠久的传统名校",
                "校园环境优美，占地面积大"
            ],
            advantages: [
                "办学历史悠久，文化底蕴深厚",
                "师资队伍稳定，教学经验丰富",
                "校园环境优美，学习氛围好",
                "寄宿条件完善，管理规范"
            ],
            disadvantages: [
                "地理位置相对偏远",
                "交通不太方便"
            ],
            specialties: [
                { name: "文科重点班", description: "重点培养文科人才" },
                { name: "理科普通班", description: "扎实的理科基础教育" },
                { name: "英语特色班", description: "强化英语教学" }
            ],
            contact: {
                address: "惠州市惠阳区淡水街道人民四路",
                phone: "0752-3377666",
                website: "http://www.hygjzx.edu.cn"
            },
                        ownership: "公立",
            ranking: 3,
            ownership: "公立"
        },
        {
            id: 4,
            name: "博罗中学",
            type: "县级重点",
            location: "博罗县",
            established: 1926,
            scoreRequirement: {
                min: 550,
                max: 620,
                average: 580
            },
            features: [
                "博罗县最好的高中",
                "农村学生比例较高",
                "扶贫助学政策完善"
            ],
            advantages: [
                "县级重点，本地认可度高",
                "学费相对较低，经济实惠",
                "对农村学生有优惠政策",
                "学习压力相对较小"
            ],
            disadvantages: [
                "教学资源相对市区学校有限",
                "课外活动相对较少"
            ],
            specialties: [
                { name: "农村班", description: "针对农村学生的特色班级" },
                { name: "扶贫助学班", description: "对贫困学生提供资助" }
            ],
            contact: {
                address: "惠州市博罗县罗阳街道",
                phone: "0752-6622333",
                website: "http://www.blzx.edu.cn"
            },
            ranking: 4
        }
    ],
    
    // 惠州市中专/职高/技工学校（全市范围）
    vocationalSchools: [
        // 惠城区
        {
            id: 101,
            name: "惠州工程技术学校",
            type: "工科中专",
            location: "惠城区",
            established: 1978,
            scoreRequirement: { min: 400, max: 520, average: 460 },
            features: ["广东省重点中等职业学校", "校企合作示范单位", "实训基地设备先进"],
            advantages: ["工科专业实力强，就业率高", "与企业合作紧密，实习机会多", "实训设备先进", "学费较低，有国家补贴"],
            disadvantages: ["理论学习相对较少", "工作环境可能较辛苦"],
            specialties: [
                { name: "机电技术应用", description: "培养机电设备维修技术人员", employment: "制造业、设备维护企业", salary: "4000-8000元/月" },
                { name: "汽车运用与维修", description: "汽车检测、维修、保养技术", employment: "4S店、汽车维修厂", salary: "3500-7000元/月" },
                { name: "数控技术应用", description: "数控机床操作与编程", employment: "机械制造企业", salary: "4500-9000元/月" },
                { name: "电子技术应用", description: "电子产品制造与维修", employment: "电子制造企业", salary: "3800-7500元/月" }
            ],
            contact: { address: "惠州市惠城区马安镇", phone: "0752-2234777", website: "http://www.hzgcjsxx.edu.cn" },
                        ownership: "公立",
            ranking: 1,
            ownership: "公立"
        },
        {
            id: 102,
            name: "惠州卫生职业技术学院（中职部）",
            type: "医学中专",
            location: "惠城区",
            established: 1958,
            scoreRequirement: { min: 420, max: 540, average: 480 },
            features: ["医学教育特色鲜明", "附属医院实习基地", "护士执业资格通过率高"],
            advantages: ["医学专业就业稳定，需求大", "实习机会多，实践能力强", "工作环境相对较好", "社会地位较高"],
            disadvantages: ["学习压力大，要求细致", "工作时间可能不规律"],
            specialties: [
                { name: "护理", description: "临床护理、社区护理", employment: "医院、社区卫生中心", salary: "4000-8000元/月" },
                { name: "医学检验技术", description: "临床检验、病理检验", employment: "医院检验科、疾控中心", salary: "4500-8500元/月" },
                { name: "药剂", description: "药品调剂、药品管理", employment: "医院药房、药店", salary: "3800-7500元/月" },
                { name: "康复技术", description: "康复治疗与训练", employment: "康复中心、医院", salary: "4000-8000元/月" }
            ],
            contact: { address: "惠州市惠城区鹅岭南路", phone: "0752-2234999", website: "http://www.hzwx.edu.cn" },
            ranking: 2
        },
        {
            id: 103,
            name: "惠州商贸旅游学校",
            type: "商科中专",
            location: "惠城区",
            established: 1993,
            scoreRequirement: { min: 380, max: 500, average: 440 },
            features: ["商贸旅游特色学校", "现代服务业人才培养基地", "校企合作订单班"],
            advantages: ["专业贴近市场需求，就业面广", "校企合作多，实习机会好", "工作环境相对舒适", "发展空间大"],
            disadvantages: ["起薪可能相对较低", "需要较强的沟通能力"],
            specialties: [
                { name: "电子商务", description: "网店运营、网络营销", employment: "电商企业、自主创业", salary: "3500-10000元/月" },
                { name: "旅游服务与管理", description: "导游、旅行社管理", employment: "旅行社、景区", salary: "3000-8000元/月" },
                { name: "会计事务", description: "会计核算、财务管理", employment: "企业财务部门", salary: "4000-9000元/月" },
                { name: "市场营销", description: "市场推广、销售管理", employment: "各类企业销售部门", salary: "3500-9000元/月" }
            ],
            contact: { address: "惠州市惠城区江北街道", phone: "0752-2234111", website: "http://www.hzsmlyxx.edu.cn" },
                        ownership: "公立",
            ranking: 3,
            ownership: "公立"
        },
        {
            id: 104,
            name: "惠州艺术学校",
            type: "艺术中专",
            location: "惠城区",
            established: 1985,
            scoreRequirement: { min: 350, max: 480, average: 420 },
            features: ["艺术教育特色学校", "文化传承基地", "艺术表演团体合作单位"],
            advantages: ["艺术专业特色鲜明", "师资力量专业", "实践演出机会多", "文化传承价值高"],
            disadvantages: ["就业面相对较窄", "需要艺术天赋", "收入不稳定"],
            specialties: [
                { name: "音乐表演", description: "声乐、器乐表演", employment: "艺术团体、培训机构", salary: "3000-10000元/月" },
                { name: "舞蹈表演", description: "舞蹈编排与表演", employment: "舞蹈团、文化馆", salary: "3500-9000元/月" },
                { name: "美术设计与制作", description: "平面设计、美术创作", employment: "设计公司、广告公司", salary: "4000-10000元/月" },
                { name: "戏曲表演", description: "传统戏曲表演", employment: "戏曲院团、文化单位", salary: "3000-8000元/月" }
            ],
            contact: { address: "惠州市惠城区下角东路", phone: "0752-2234333", website: "http://www.hzyssxx.edu.cn" },
                        ownership: "公立",
            ranking: 4,
            ownership: "公立"
        },
        {
            id: 105,
            name: "惠州体育运动学校",
            type: "体育中专",
            location: "惠城区",
            established: 1973,
            scoreRequirement: { min: 300, max: 450, average: 380 },
            features: ["体育专业特色学校", "省级训练基地", "体育人才培养摇篮"],
            advantages: ["体育专业突出", "训练设施完善", "升学途径多样", "就业方向明确"],
            disadvantages: ["训练强度大", "职业寿命有限", "伤病风险高"],
            specialties: [
                { name: "运动训练", description: "专项运动训练", employment: "体育队、健身中心", salary: "3500-12000元/月" },
                { name: "体育教育", description: "体育教学与训练", employment: "学校、培训机构", salary: "4000-9000元/月" },
                { name: "社会体育", description: "群众体育指导", employment: "社区、体育中心", salary: "3500-8000元/月" },
                { name: "体育保健", description: "运动康复与保健", employment: "康复中心、运动队", salary: "4000-9000元/月" }
            ],
            contact: { address: "惠州市惠城区体育南路", phone: "0752-2234444", website: "http://www.hztyxx.edu.cn" },
                        ownership: "公立",
            ranking: 5,
            ownership: "公立"
        },
        
        // 惠阳区
        {
            id: 106,
            name: "惠阳职业技术学校",
            type: "综合职高",
            location: "惠阳区",
            established: 1995,
            scoreRequirement: { min: 360, max: 480, average: 420 },
            features: ["惠阳区重点职校", "产教融合示范校", "技能大赛获奖多"],
            advantages: ["专业设置全面", "校企合作深入", "就业渠道畅通", "学费实惠"],
            disadvantages: ["办学规模有限", "高端设备较少", "师资力量一般"],
            specialties: [
                { name: "计算机应用", description: "计算机操作与维护", employment: "IT公司、企事业单位", salary: "3500-8000元/月" },
                { name: "幼儿保育", description: "幼儿教育与管理", employment: "幼儿园、早教中心", salary: "3000-7000元/月" },
                { name: "中餐烹饪", description: "中式菜肴制作", employment: "酒店、餐厅", salary: "3500-10000元/月" },
                { name: "服装设计与工艺", description: "服装设计制作", employment: "服装厂、设计公司", salary: "3000-8000元/月" }
            ],
            contact: { address: "惠州市惠阳区淡水街道", phone: "0752-3377111", website: "http://www.hyzyjsxx.edu.cn" },
            ranking: 6
        },
        {
            id: 107,
            name: "惠阳商贸学校",
            type: "商贸职高",
            location: "惠阳区",
            established: 2002,
            scoreRequirement: { min: 340, max: 460, average: 400 },
            features: ["商贸专业特色", "创业孵化基地", "电商实训中心"],
            advantages: ["商贸专业突出", "创业支持力度大", "实训条件好", "就业灵活"],
            disadvantages: ["学术氛围较弱", "师资流动性大", "管理相对松散"],
            specialties: [
                { name: "电子商务", description: "网店运营与管理", employment: "电商企业、自主创业", salary: "3500-12000元/月" },
                { name: "物流服务与管理", description: "物流仓储管理", employment: "物流公司、仓储企业", salary: "3500-8000元/月" },
                { name: "国际商务", description: "外贸业务操作", employment: "外贸公司、报关行", salary: "4000-9000元/月" },
                { name: "商务英语", description: "商务英语应用", employment: "外贸企业、涉外机构", salary: "4000-10000元/月" }
            ],
            contact: { address: "惠州市惠阳区秋长街道", phone: "0752-3377222", website: "http://www.hysmxx.edu.cn" },
            ranking: 7
        },
        
        // 博罗县
        {
            id: 108,
            name: "博罗中等专业学校",
            type: "综合中专",
            location: "博罗县",
            established: 1983,
            scoreRequirement: { min: 320, max: 440, average: 380 },
            features: ["博罗县重点中专", "农村学生比例高", "扶贫助学政策好"],
            advantages: ["学费低廉", "政策支持多", "农村学生适应好", "就业稳定"],
            disadvantages: ["教学资源有限", "地理位置偏远", "发展机会较少"],
            specialties: [
                { name: "农业机械使用与维护", description: "农业机械操作维修", employment: "农机站、农业企业", salary: "3500-7000元/月" },
                { name: "农村经济综合管理", description: "农村经济管理", employment: "村委会、农业企业", salary: "3000-6500元/月" },
                { name: "畜牧兽医", description: "畜牧养殖与疾病防治", employment: "养殖场、兽医站", salary: "3500-8000元/月" },
                { name: "园林技术", description: "园林规划与养护", employment: "园林公司、市政部门", salary: "3500-7500元/月" }
            ],
            contact: { address: "惠州市博罗县罗阳街道", phone: "0752-6622111", website: "http://www.blzdzyxx.edu.cn" },
                        ownership: "公立",
            ranking: 8,
            ownership: "公立"
        },
        {
            id: 109,
            name: "博罗县职业技术学校",
            type: "综合职高",
            location: "博罗县",
            established: 1998,
            scoreRequirement: { min: 300, max: 420, average: 360 },
            features: ["县域职业教育中心", "技能培训基地", "就业指导服务好"],
            advantages: ["本地就业优势", "学费补贴多", "实践机会多", "生活成本低"],
            disadvantages: ["办学条件一般", "专业设置传统", "发展空间有限"],
            specialties: [
                { name: "汽车维修", description: "汽车检测与维修", employment: "汽修厂、4S店", salary: "3500-8000元/月" },
                { name: "电子电器应用与维修", description: "电器维修技术", employment: "电器维修店、企业", salary: "3000-7000元/月" },
                { name: "建筑工程施工", description: "建筑施工技术", employment: "建筑公司、工地", salary: "4000-9000元/月" },
                { name: "会计", description: "会计核算与管理", employment: "企业财务部门", salary: "3500-8000元/月" }
            ],
            contact: { address: "惠州市博罗县龙溪街道", phone: "0752-6622222", website: "http://www.blxzyjsxx.edu.cn" },
                        ownership: "公立",
            ranking: 9,
            ownership: "公立"
        },
        
        // 惠东县
        {
            id: 110,
            name: "惠东县职业技术学校",
            type: "综合职高",
            location: "惠东县",
            established: 1992,
            scoreRequirement: { min: 310, max: 430, average: 370 },
            features: ["惠东县职业教育龙头", "滨海特色专业", "旅游服务特色"],
            advantages: ["滨海特色专业", "旅游就业优势", "实践机会多", "学费实惠"],
            disadvantages: ["地理位置偏远", "师资力量有限", "高端设备不足"],
            specialties: [
                { name: "旅游服务与管理", description: "旅游接待与服务", employment: "酒店、旅行社", salary: "3000-8000元/月" },
                { name: "高星级饭店运营与管理", description: "酒店管理服务", employment: "星级酒店、度假村", salary: "3500-9000元/月" },
                { name: "水产养殖", description: "水产养殖技术", employment: "养殖场、水产公司", salary: "3500-8000元/月" },
                { name: "海洋渔业技术", description: "海洋捕捞与加工", employment: "渔业公司、加工厂", salary: "4000-9000元/月" }
            ],
            contact: { address: "惠州市惠东县平山街道", phone: "0752-8822333", website: "http://www.hdxzyjsxx.edu.cn" },
                        ownership: "公立",
            ranking: 10,
            ownership: "公立"
        },
        
        // 龙门县
        {
            id: 111,
            name: "龙门县职业技术学校",
            type: "综合职高",
            location: "龙门县",
            established: 1996,
            scoreRequirement: { min: 280, max: 400, average: 340 },
            features: ["山区职业教育", "生态旅游专业", "扶贫助学重点"],
            advantages: ["山区特色专业", "政策扶持多", "学费全免机会", "就业稳定"],
            disadvantages: ["办学条件艰苦", "专业选择少", "发展机会有限"],
            specialties: [
                { name: "旅游服务与管理", description: "生态旅游服务", employment: "景区、农家乐", salary: "2800-7000元/月" },
                { name: "林业技术", description: "林业生产与管理", employment: "林场、林业站", salary: "3000-6500元/月" },
                { name: "茶叶生产与加工", description: "茶叶种植加工", employment: "茶场、茶叶公司", salary: "3200-7000元/月" },
                { name: "农村电气技术", description: "农村电网维护", employment: "供电所、电工", salary: "3500-7500元/月" }
            ],
            contact: { address: "惠州市龙门县龙城街道", phone: "0752-7788999", website: "http://www.lmxzyjsxx.edu.cn" },
                        ownership: "公立",
            ranking: 11,
            ownership: "公立"
        },
        
        // 大亚湾区
        {
            id: 112,
            name: "大亚湾职业技术学校",
            type: "工业职高",
            location: "大亚湾区",
            established: 2008,
            scoreRequirement: { min: 350, max: 470, average: 410 },
            features: ["临港工业特色", "石化专业突出", "校企合作紧密"],
            advantages: ["工业就业优势", "企业需求大", "薪资待遇好", "发展前景广"],
            disadvantages: ["工作环境要求高", "安全风险存在", "专业性强"],
            specialties: [
                { name: "石油化工技术", description: "石化生产操作", employment: "石化企业、化工厂", salary: "4500-10000元/月" },
                { name: "港口机械运行与维护", description: "港口设备操作", employment: "港口、物流公司", salary: "4000-9000元/月" },
                { name: "工业分析与检验", description: "工业品检测分析", employment: "检测机构、企业", salary: "3800-8500元/月" },
                { name: "物流服务与管理", description: "物流仓储管理", employment: "物流园区、企业", salary: "3500-8000元/月" }
            ],
            contact: { address: "惠州市大亚湾区澳头街道", phone: "0752-5566777", website: "http://www.dywzyjsxx.edu.cn" },
                        ownership: "公立",
            ranking: 12,
            ownership: "公立"
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
            contact: { address: "惠州市惠城区马安镇", phone: "0752-2234222", website: "http://www.hzjsxy.edu.cn",
            detailed_description: "惠州市技师学院是国家级重点技工院校，广东省高技能人才培养示范基地。学院拥有现代化的实训基地，与世界500强企业建立了深度合作关系，毕业生就业率连续多年保持在98%以上。",
            facilities: ["数控加工中心", "模具制造实训室", "电气自动化实验室", "烹饪实训中心", "汽车维修实训基地"],
            certifications: ["高级工证书", "技师证书", "特种作业操作证", "ISO认证"] },
                        ownership: "公立",
            ranking: 1,
            ownership: "公立"
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
            contact: { address: "惠州市惠城区水口街道", phone: "0752-2234555", website: "http://www.hzkjjsxx.edu.cn",,
            
            detailed_description: "惠州科技技工学校专注于培养科技型技能人才，开设无人机、3D打印、物联网等前沿专业。学校与多家科技企业合作，为学生提供实习和就业机会。",
            facilities: ['无人机实训室', '3D打印实验室', '物联网实训平台', '计算机维修中心'],
            certifications: ['中级工证书', '无人机操作证', '计算机等级证书'],ranking:},
                        ownership: "私立",
            ranking: 2,
            ownership: "私立"
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
                { name: "工程造价", description: "工程预算与结算", employment: "建筑公司、造价公司", salary: "4000-11000元/月", skillLevel: "中级工" },
                { name: "工程测量", description: "工程测量技术", employment: "测绘公司、工地", salary: "4200-9500元/月", skillLevel: "中级工" }
            ],
            contact: { address: "惠州市惠城区河南岸", phone: "0752-2234666", website: "http://www.hzjzjsxx.edu.cn",,
            
            detailed_description: "惠州建筑工程技工学校是建筑行业技能人才培养的重要基地，拥有建筑施工、装饰装修、工程造价等特色专业。学校与多家建筑企业合作，实行订单式培养。",
            facilities: ['建筑施工实训场', '建筑装饰实训室', '工程测量实验室', '工程造价模拟室'],
            certifications: ['中级工证书', '施工员证', '造价员证', '测量员证'],ranking:},
                        ownership: "私立",
            ranking: 3,
            ownership: "私立"
        },
        
        // 惠阳区
        {
            id: 204,
            name: "惠阳区技工学校",
            type: "综合技工",
            location: "惠阳区",
            established: 1995,
            scoreRequirement: { min: 270, max: 390, average: 330 },
            features: ["惠阳区重点技校", "制造业人才培养", "技能鉴定中心"],
            advantages: ["制造业就业优势", "企业订单培养", "学费实惠", "就业渠道多"],
            disadvantages: ["办学条件一般", "高端设备不足", "师资力量有限"],
            specialties: [
                { name: "机电一体化", description: "机电设备安装维护", employment: "制造企业、工厂", salary: "3800-8500元/月", skillLevel: "中级工" },
                { name: "电子技术应用", description: "电子产品装配维修", employment: "电子厂、维修店", salary: "3500-8000元/月", skillLevel: "初级工" },
                { name: "汽车维修", description: "汽车检测与维修", employment: "汽修厂、4S店", salary: "4000-9000元/月", skillLevel: "中级工" },
                { name: "制冷设备运用与维修", description: "空调制冷设备维修", employment: "制冷公司、维修店", salary: "3800-8500元/月", skillLevel: "中级工" }
            ],
            contact: { address: "惠州市惠阳区新圩镇", phone: "0752-3377333", website: "http://www.hyqjsxx.edu.cn",,
            
            detailed_description: "惠阳区技工学校是惠阳区重点技工院校，主要培养制造业急需的技能人才。学校实行校企合作，毕业生主要输送到惠阳区及周边地区的制造企业。",
            facilities: ['机电一体化实训室', '电子技术实验室', '汽车维修车间', '制冷设备实训室'],
            certifications: ['初级工证书', '中级工证书', '电工证', '焊工证'],ranking:},
                        ownership: "公立",
            ranking: 4,
            ownership: "公立"
        },
        
        // 博罗县
        {
            id: 205,
            name: "博罗县技工学校",
            type: "综合技工",
            location: "博罗县",
            established: 2000,
            scoreRequirement: { min: 260, max: 380, average: 320 },
            features: ["县域技工教育", "农村劳动力培训", "扶贫技能培训"],
            advantages: ["学费低廉", "政策补贴多", "就业稳定", "生活成本低"],
            disadvantages: ["办学条件有限", "专业设置传统", "发展机会少"],
            specialties: [
                { name: "农机使用与维修", description: "农业机械操作维修", employment: "农机站、合作社", salary: "3200-7000元/月", skillLevel: "初级工" },
                { name: "电工", description: "电气安装与维修", employment: "工厂、建筑工地", salary: "3500-8000元/月", skillLevel: "初级工" },
                { name: "焊工", description: "焊接技术与操作", employment: "制造企业、工地", salary: "4000-9000元/月", skillLevel: "中级工" },
                { name: "钳工", description: "机械装配与维修", employment: "机械厂、维修车间", salary: "3800-8500元/月", skillLevel: "中级工" }
            ],
            contact: { address: "惠州市博罗县园洲镇", phone: "0752-6622333", website: "http://www.blxjsxx.edu.cn",,
            
            detailed_description: "博罗县技工学校主要为农村劳动力提供技能培训，开设农业机械、电工、焊工等实用专业。学校享受国家扶贫政策支持，学费低廉。",
            facilities: ['农机维修车间', '电工实训室', '焊工实训场', '钳工实训室'],
            certifications: ['初级工证书', '农机操作证', '电工证', '焊工证'],ranking:},
                        ownership: "公立",
            ranking: 5,
            ownership: "公立"
        },
        
        // 惠东县
        {
            id: 206,
            name: "惠东县技工学校",
            type: "旅游技工",
            location: "惠东县",
            established: 2003,
            scoreRequirement: { min: 250, max: 370, average: 310 },
            features: ["滨海旅游特色", "酒店服务培训", "旅游技能鉴定"],
            advantages: ["旅游就业优势", "实践机会多", "工作环境好", "发展空间大"],
            disadvantages: ["季节性影响", "收入不稳定", "竞争压力大"],
            specialties: [
                { name: "酒店服务", description: "酒店接待与服务", employment: "酒店、度假村", salary: "3000-8000元/月", skillLevel: "初级工" },
                { name: "烹饪（西式烹调）", description: "西餐制作", employment: "西餐厅、酒店", salary: "3500-10000元/月", skillLevel: "中级工" },
                { name: "调酒", description: "酒水调制与服务", employment: "酒吧、酒店", salary: "3500-12000元/月", skillLevel: "中级工" },
                { name: "旅游服务", description: "旅游接待与导游", employment: "旅行社、景区", salary: "3000-9000元/月", skillLevel: "初级工" }
            ],
            contact: { address: "惠州市惠东县巽寮湾", phone: "0752-8822444", website: "http://www.hdxjsxx.edu.cn",,
            
            detailed_description: "惠东县技工学校依托惠东滨海旅游资源，重点培养旅游服务类技能人才。学校与巽寮湾、双月湾等景区合作，为学生提供实习岗位。",
            facilities: ['酒店服务实训室', '西餐烹饪厨房', '调酒吧台', '旅游接待中心'],
            certifications: ['初级工证书', '调酒师证', '导游证', '厨师证'],ranking:},
                        ownership: "公立",
            ranking: 6,
            ownership: "公立"
        },
        
        // 大亚湾区
        {
            id: 207,
            name: "大亚湾石化技工学校",
            type: "石化技工",
            location: "大亚湾区",
            established: 2010,
            scoreRequirement: { min: 320, max: 440, average: 380 },
            features: ["石化产业特色", "安全培训重点", "企业定向培养"],
            advantages: ["石化行业需求大", "薪资待遇优厚", "技术含量高", "发展前景好"],
            disadvantages: ["工作环境特殊", "安全要求严格", "专业性强"],
            specialties: [
                { name: "化工工艺", description: "化工生产过程操作", employment: "化工厂、石化企业", salary: "5000-12000元/月", skillLevel: "高级工" },
                { name: "化工仪表及自动化", description: "化工仪表维护", employment: "自动化企业、化工厂", salary: "4500-11000元/月", skillLevel: "中级工" },
                { name: "化工机械维修", description: "化工设备维修", employment: "设备维修公司、化工厂", salary: "4800-11500元/月", skillLevel: "高级工" },
                { name: "化工分析与检验", description: "化工产品检测", employment: "检测机构、化工厂", salary: "4200-10000元/月", skillLevel: "中级工" }
            ],
            contact: { address: "惠州市大亚湾区石化区", phone: "0752-5566888", website: "http://www.dywshjsxx.edu.cn",,
            
            detailed_description: "大亚湾石化技工学校是大亚湾石化区的配套人才培养基地，专门为石化企业培养技术工人。学校实行严格的安全生产培训，毕业生供不应求。",
            facilities: ['化工工艺实训室', '化工仪表实验室', '化工机械维修车间', '化工分析检验中心'],
            certifications: ['高级工证书', '化工操作证', '安全员证', '特种设备操作证'],ranking:},
                        ownership: "公立",
            ranking: 7,
            ownership: "公立"
        },
        
        // 仲恺高新区
        {
            id: 208,
            name: "仲恺高新区技工学校",
            type: "高新技工",
            location: "仲恺高新区",
            established: 2012,
            scoreRequirement: { min: 330, max: 450, average: 390 },
            features: ["高新区产业特色", "科技创新培训", "高新技术企业合作"],
            advantages: ["高新技术就业", "创新氛围好", "发展空间大", "薪资待遇优"],
            disadvantages: ["竞争压力大", "技术更新快", "学习要求高"],
            specialties: [
                { name: "工业机器人应用与维护", description: "工业机器人操作维护", employment: "智能制造企业", salary: "5500-13000元/月", skillLevel: "高级工" },
                { name: "新能源汽车检测与维修", description: "新能源汽车维修", employment: "汽车4S店、维修厂", salary: "5000-12000元/月", skillLevel: "高级工" },
                { name: "智能控制技术", description: "智能控制系统应用", employment: "自动化企业、工厂", salary: "4800-11500元/月", skillLevel: "中级工" },
                { name: "数字化设计与制造", description: "数字化制造技术", employment: "制造企业、设计公司", salary: "4500-11000元/月", skillLevel: "中级工" }
            ],
            contact: { address: "惠州市仲恺高新区惠风路", phone: "0752-2600111", website: "http://www.zkjsxx.edu.cn",,
            
            detailed_description: "仲恺高新区技工学校为高新区内的高新技术企业培养技能人才，开设电子技术、智能制造等专业。学校与企业深度合作，实行工学交替培养模式。",
            facilities: ['电子技术实验室', '智能制造实训中心', 'SMT生产线', '工业机器人实训室'],
            certifications: ['中级工证书', '电子装配工证', '机器人操作证'],ranking:},
                        ownership: "公立",
            ranking: 8,
            ownership: "公立"
        },
        
        // 综合技工学校
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
                { name: "美容美发与造型", description: "美容美发技术", employment: "美容院、美发店", salary: "3000-15000元/月", skillLevel: "中级工" },
                { name: "家政服务", description: "家政服务管理", employment: "家政公司、家庭", salary: "3500-10000元/月", skillLevel: "初级工" }
            ],
            contact: { address: "惠州市惠城区麦地路", phone: "0752-2234888", website: "http://www.hzxdjsxx.edu.cn",,
            
            detailed_description: "惠州现代技工学校是一所民办技工学校，注重现代服务业技能人才培养。学校开设汽车服务、电子商务、现代物流等热门专业。",
            facilities: ['汽车服务实训中心', '电子商务实训室', '物流仓储模拟室', '美容美发实训室'],
            certifications: ['中级工证书', '汽车维修工证', '电子商务师证', '物流员证'],ranking:},
                        ownership: "私立",
            ranking: 9,
            ownership: "私立"
        },
        
        // 特色技工学校
        {
            id: 210,
            name: "惠州艺术技工学校",
            type: "艺术技工",
            location: "惠城区",
            established: 2015,
            scoreRequirement: { min: 240, max: 360, average: 300 },
            features: ["艺术技能培训", "文化创意产业", "非遗传承基地"],
            advantages: ["艺术特色鲜明", "创意空间大", "文化价值高", "个性发展好"],
            disadvantages: ["就业面较窄", "收入不稳定", "需要艺术天赋"],
            specialties: [
                { name: "工艺美术", description: "工艺品设计与制作", employment: "工艺品厂、设计公司", salary: "3000-12000元/月", skillLevel: "中级工" },
                { name: "珠宝首饰设计与制作", description: "珠宝设计制作", employment: "珠宝公司、首饰店", salary: "3500-15000元/月", skillLevel: "高级工" },
                { name: "陶瓷艺术设计", description: "陶瓷设计与制作", employment: "陶瓷厂、艺术工作室", salary: "3200-10000元/月", skillLevel: "中级工" },
                { name: "木雕工艺", description: "木雕设计与制作", employment: "木雕厂、工艺品店", salary: "3500-12000元/月", skillLevel: "高级工" }
            ],
            contact: { address: "惠州市惠城区桥东街道", phone: "0752-2234999", website: "http://www.hzysjsxx.edu.cn",,
            
            detailed_description: "惠州艺术技工学校是民办艺术类技工学校，培养艺术设计、表演艺术等领域的技能人才。学校注重实践教学，与多家文化传媒公司合作。",
            facilities: ['艺术设计工作室', '舞蹈排练厅', '音乐录音棚', '影视制作中心'],
            certifications: ['中级工证书', '艺术设计员证', '表演艺术证'],ranking:},
                        ownership: "私立",
            ranking: 10,
            ownership: "私立"
        }
    ]
};

// 学校筛选函数
function filterSchools(criteria) {
    let results = {
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
}// 兼容性修复：创建 schools 变量
const schools = huizhouSchools;
