// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initNavigation();
    initScoreSlider();
    initInterestButtons();
    initPlanButtons();
    initScreening();
    initTabs();
    initActiveNav();
    initAnimations();
    initSchoolFilter();
    loadSchoolsData();
});

// 初始化导航
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // 点击链接后关闭菜单
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.querySelector('i').classList.remove('fa-times');
                navToggle.querySelector('i').classList.add('fa-bars');
                
                // 更新激活状态
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
    }
}

// 初始化分数滑块
function initScoreSlider() {
    const scoreSlider = document.getElementById('score');
    const scoreValue = document.getElementById('score-value');
    
    if (scoreSlider && scoreValue) {
        function updateScoreDisplay() {
            scoreValue.textContent = scoreSlider.value;
        }
        
        // 初始更新
        updateScoreDisplay();
        
        // 滑块变化时更新
        scoreSlider.addEventListener('input', updateScoreDisplay);
        
        // 键盘支持
        scoreSlider.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                setTimeout(updateScoreDisplay, 10);
            }
        });
    }
}

// 初始化兴趣按钮
function initInterestButtons() {
    const interestButtons = document.querySelectorAll('.interest-btn');
    let selectedInterest = 'academic'; // 默认选择
    
    interestButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除其他按钮的激活状态
            interestButtons.forEach(btn => btn.classList.remove('active'));
            
            // 激活当前按钮
            this.classList.add('active');
            selectedInterest = this.getAttribute('data-value');
        });
    });
    
    // 设置第一个按钮为激活状态
    if (interestButtons.length > 0) {
        interestButtons[0].classList.add('active');
    }
    
    return function() {
        return selectedInterest;
    };
}

// 初始化规划按钮
function initPlanButtons() {
    const planButtons = document.querySelectorAll('.plan-btn');
    let selectedPlan = 'university'; // 默认选择
    
    planButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除其他按钮的激活状态
            planButtons.forEach(btn => btn.classList.remove('active'));
            
            // 激活当前按钮
            this.classList.add('active');
            selectedPlan = this.getAttribute('data-value');
        });
    });
    
    // 设置第一个按钮为激活状态
    if (planButtons.length > 0) {
        planButtons[0].classList.add('active');
    }
    
    return function() {
        return selectedPlan;
    };
}

// 初始化智能筛选
function initScreening() {
    const analyzeBtn = document.getElementById('analyze-btn');
    const resultPanel = document.getElementById('result-panel');
    const resetBtn = document.getElementById('reset-btn');
    const detailBtn = document.getElementById('detail-btn');
    
    if (!analyzeBtn) return;
    
    // 获取用户选择函数
    const getSelectedInterest = initInterestButtons();
    const getSelectedPlan = initPlanButtons();
    
    analyzeBtn.addEventListener('click', function() {
        // 获取用户输入
        const score = parseInt(document.getElementById('score').value);
        const interest = getSelectedInterest();
        const plan = getSelectedPlan();
        
        // 分析推荐
        const recommendation = analyzeRecommendation(score, interest, plan);
        
        // 显示结果
        displayRecommendation(recommendation);
        
        // 显示结果面板
        resultPanel.classList.remove('hidden');
        
        // 滚动到结果区域
        resultPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // 添加分析动画
        this.innerHTML = '<i class="fas fa-check"></i> 分析完成';
        this.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-brain"></i> 开始分析推荐';
            this.style.background = 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)';
        }, 2000);
    });
    
    // 重置按钮
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            // 重置表单
            document.getElementById('score').value = 500;
            document.getElementById('score-value').textContent = '500';
            
            // 重置兴趣按钮
            document.querySelectorAll('.interest-btn').forEach((btn, index) => {
                btn.classList.remove('active');
                if (index === 0) btn.classList.add('active');
            });
            
            // 重置规划按钮
            document.querySelectorAll('.plan-btn').forEach((btn, index) => {
                btn.classList.remove('active');
                if (index === 0) btn.classList.add('active');
            });
            
            // 隐藏结果面板
            resultPanel.classList.add('hidden');
        });
    }
    
    // 详情按钮
    if (detailBtn) {
        detailBtn.addEventListener('click', function() {
            const recommendedType = document.getElementById('recommend-title').textContent;
            let targetSection = '#choices';
            
            // 根据推荐类型跳转到对应部分
            if (recommendedType.includes('高中')) {
                targetSection = '#choices';
            } else if (recommendedType.includes('中专') || recommendedType.includes('职高')) {
                targetSection = '#compare';
            } else if (recommendedType.includes('技工')) {
                targetSection = '#schools';
            }
            
            // 滚动到对应部分
            document.querySelector(targetSection).scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        });
    }
}

// 分析推荐算法
function analyzeRecommendation(score, interest, plan) {
    let recommendations = [];
    let matchPercent = 0;
    let reasons = [];
    
    // 计算每种路径的匹配度
    const highSchoolScore = calculateHighSchoolScore(score, interest, plan);
    const vocationalScore = calculateVocationalScore(score, interest, plan);
    const techSchoolScore = calculateTechSchoolScore(score, interest, plan);
    
    // 确定最佳推荐
    let bestChoice;
    if (highSchoolScore >= vocationalScore && highSchoolScore >= techSchoolScore) {
        bestChoice = {
            type: 'high-school',
            name: '普通高中',
            icon: '🏫',
            matchPercent: Math.round(highSchoolScore)
        };
        matchPercent = Math.round(highSchoolScore);
    } else if (vocationalScore >= highSchoolScore && vocationalScore >= techSchoolScore) {
        bestChoice = {
            type: 'vocational',
            name: '中专/职高',
            icon: '🔧',
            matchPercent: Math.round(vocationalScore)
        };
        matchPercent = Math.round(vocationalScore);
    } else {
        bestChoice = {
            type: 'tech-school',
            name: '技工学校',
            icon: '⚙️',
            matchPercent: Math.round(techSchoolScore)
        };
        matchPercent = Math.round(techSchoolScore);
    }
    
    // 生成推荐理由
    reasons = generateReasons(score, interest, plan, bestChoice.type);
    
    return {
        bestChoice: bestChoice,
        matchPercent: matchPercent,
        reasons: reasons
    };
}

// 计算高中匹配度
function calculateHighSchoolScore(score, interest, plan) {
    let scoreValue = 0;
    
    // 分数匹配（权重最高）
    if (score >= 600) scoreValue += 50;
    else if (score >= 550) scoreValue += 40;
    else if (score >= 500) scoreValue += 25;
    else scoreValue += 10;
    
    // 兴趣匹配
    if (interest === 'academic') scoreValue += 30;
    else if (interest === 'skill') scoreValue += 15;
    else scoreValue += 20;
    
    // 规划匹配
    if (plan === 'university') scoreValue += 20;
    else scoreValue += 5;
    
    return (scoreValue / 100) * 100;
}

// 计算中专/职高匹配度
function calculateVocationalScore(score, interest, plan) {
    let scoreValue = 0;
    
    // 分数匹配
    if (score >= 500 && score <= 550) scoreValue += 45;
    else if (score >= 450 && score <= 600) scoreValue += 35;
    else if (score >= 400 && score <= 650) scoreValue += 25;
    else scoreValue += 15;
    
    // 兴趣匹配
    if (interest === 'skill') scoreValue += 35;
    else if (interest === 'tech') scoreValue += 25;
    else scoreValue += 15;
    
    // 规划匹配
    if (plan === 'job') scoreValue += 20;
    else scoreValue += 10;
    
    return (scoreValue / 100) * 100;
}

// 计算技工学校匹配度
function calculateTechSchoolScore(score, interest, plan) {
    let scoreValue = 0;
    
    // 分数匹配
    if (score <= 450) scoreValue += 50;
    else if (score <= 500) scoreValue += 35;
    else if (score <= 550) scoreValue += 20;
    else scoreValue += 10;
    
    // 兴趣匹配
    if (interest === 'tech') scoreValue += 35;
    else if (interest === 'skill') scoreValue += 25;
    else scoreValue += 15;
    
    // 规划匹配
    if (plan === 'job') scoreValue += 15;
    else scoreValue += 5;
    
    return (scoreValue / 100) * 100;
}

// 生成推荐理由
function generateReasons(score, interest, plan, choiceType) {
    const reasons = [];
    
    // 根据分数生成理由
    if (choiceType === 'high-school') {
        if (score >= 550) {
            reasons.push('你的中考分数达到普通高中的录取要求');
        } else if (score >= 500) {
            reasons.push('你的分数接近普通高中要求，可以考虑冲刺');
        }
        
        if (interest === 'academic') {
            reasons.push('你的兴趣偏向学术理论，适合高中学习模式');
        }
        
        if (plan === 'university') {
            reasons.push('你的未来规划是读大学，高中是最佳路径');
        }
        
        reasons.push('惠州有多所优质高中可供选择');
        
    } else if (choiceType === 'vocational') {
        if (score >= 400 && score <= 550) {
            reasons.push('你的中考分数适合中专/职高的录取范围');
        }
        
        if (interest === 'skill' || interest === 'tech') {
            reasons.push('你的兴趣偏向技能操作，适合职业教育');
        }
        
        if (plan === 'job') {
            reasons.push('你想早点就业，中专/职高能提供实用技能');
        }
        
        reasons.push('惠州的中专/职高专业设置贴近市场需求');
        
    } else if (choiceType === 'tech-school') {
        if (score <= 500) {
            reasons.push('技工学校对分数要求相对灵活');
        }
        
        if (interest === 'tech') {
            reasons.push('你对技术实践感兴趣，适合技工学校');
        }
        
        reasons.push('技工学校就业率高，技术实用性强');
        reasons.push('惠州本地企业急需技术工人，就业前景好');
    }
    
    // 添加通用建议
    if (score < 400) {
        reasons.push('建议加强基础学习，提高综合能力');
    } else if (score > 600) {
        reasons.push('你有实力冲刺重点高中，为名牌大学做准备');
    }
    
    return reasons;
}

// 显示推荐结果
function displayRecommendation(recommendation) {
    const matchPercent = document.getElementById('match-percent');
    const recommendIcon = document.getElementById('recommend-icon');
    const recommendTitle = document.getElementById('recommend-title');
    const recommendDesc = document.getElementById('recommend-desc');
    const reasonList = document.getElementById('reason-list');
    
    if (matchPercent) {
        matchPercent.textContent = recommendation.matchPercent;
    }
    
    if (recommendIcon && recommendation.bestChoice) {
        recommendIcon.textContent = recommendation.bestChoice.icon;
    }
    
    if (recommendTitle && recommendation.bestChoice) {
        recommendTitle.textContent = recommendation.bestChoice.name;
    }
    
    if (recommendDesc) {
        recommendDesc.textContent = '最适合你的教育路径';
    }
    
    if (reasonList && recommendation.reasons) {
        reasonList.innerHTML = '';
        recommendation.reasons.forEach(reason => {
            const li = document.createElement('li');
            li.textContent = reason;
            reasonList.appendChild(li);
        });
    }
}

// 初始化标签页
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // 移除所有按钮的激活状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // 激活当前按钮
            this.classList.add('active');
            
            // 隐藏所有面板
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // 显示对应面板
            const targetPane = document.getElementById(`${tabId}-tab`);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
}

// 初始化导航激活状态
function initActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // 初始调用
}

// 初始化动画
function initAnimations() {
    // 添加滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    document.querySelectorAll('.choice-card, .compare-table, .screening-card, .schools-tabs').forEach(el => {
        observer.observe(el);
    });
    
    // 页面加载完成动画
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);
}

// 页面加载完成
window.addEventListener('load', function() {
    // 添加加载完成样式
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // 初始化工具提示
    initTooltips();
});

// 初始化工具提示
function initTooltips() {
    // 为分数滑块添加提示
    const scoreSlider = document.getElementById('score');
    if (scoreSlider) {
        scoreSlider.addEventListener('input', function() {
            const value = this.value;
            let tip = '';
            
            if (value >= 600) tip = '优秀！可以冲刺重点高中';
            else if (value >= 550) tip = '良好！适合普通高中';
            else if (value >= 450) tip = '中等！考虑中专/职高';
            else tip = '加油！技工学校也是好选择';
            
            // 可以在这里添加工具提示显示逻辑
        });
    }
}

// 添加键盘快捷键支持
document.addEventListener('keydown', function(e) {
    // Ctrl + Enter 开始分析
    if (e.ctrlKey && e.key === 'Enter') {
        const analyzeBtn = document.getElementById('analyze-btn');
        if (analyzeBtn) analyzeBtn.click();
    }
    
    // Esc 重置筛选
    if (e.key === 'Escape') {
        const resetBtn = document.getElementById('reset-btn');
        if (resetBtn) resetBtn.click();
    }
});

// 添加打印功能
function printRecommendation() {
    const resultPanel = document.getElementById('result-panel');
    if (!resultPanel.classList.contains('hidden')) {
        window.print();
    }
}

// 添加分享功能
function shareRecommendation() {
    if (navigator.share) {
        const title = '惠州中考择校推荐结果';
        const text = `根据我的情况，系统推荐选择：${document.getElementById('recommend-title')?.textContent || '普通高中'}`;
        const url = window.location.href;
        
        navigator.share({
            title: title,
            text: text,
            url: url
        }).catch(console.error);
    } else {
        // 复制到剪贴板
        const text = `惠州中考择校推荐结果：${document.getElementById('recommend-title')?.textContent || '普通高中'}\n匹配度：${document.getElementById('match-percent')?.textContent || '0'}%\n\n${window.location.href}`;
        
        navigator.clipboard.writeText(text).then(() => {
            alert('推荐结果已复制到剪贴板！');
        }).catch(console.error);
    }
}

// ========== 学校数据功能 ==========

// 初始化学校筛选器
function initSchoolFilter() {
    const scoreRange = document.getElementById('score-range');
    const scoreRangeValue = document.getElementById('score-range-value');
    const filterBtn = document.getElementById('filter-btn');
    
    if (scoreRange && scoreRangeValue) {
        function updateScoreRangeDisplay() {
            scoreRangeValue.textContent = scoreRange.value;
        }
        
        updateScoreRangeDisplay();
        scoreRange.addEventListener('input', updateScoreRangeDisplay);
    }
    
    if (filterBtn) {
        filterBtn.addEventListener('click', applySchoolFilter);
    }
}

// 加载学校数据
function loadSchoolsData() {
    // 加载学校数据文件
    loadSchoolsDataFile().then(() => {
        // 初始显示所有学校
        displaySchoolsByType('high-school');
        displaySchoolsByType('vocational');
        displaySchoolsByType('technical');
    }).catch(error => {
        console.error('加载学校数据失败:', error);
        // 使用默认数据
        useDefaultSchoolsData();
    });
}

// 加载学校数据文件
async function loadSchoolsDataFile() {
    try {
        // 动态加载学校数据文件
        if (typeof huizhouSchools === 'undefined') {
            const script = document.createElement('script');
            script.src = 'schools-data.js';
            script.onload = () => {
                console.log('学校数据加载成功');
            };
            script.onerror = () => {
                throw new Error('无法加载学校数据文件');
            };
            document.head.appendChild(script);
            
            // 等待数据加载
            await new Promise((resolve, reject) => {
                const checkInterval = setInterval(() => {
                    if (typeof huizhouSchools !== 'undefined') {
                        clearInterval(checkInterval);
                        resolve();
                    }
                }, 100);
                
                setTimeout(() => {
                    clearInterval(checkInterval);
                    reject(new Error('学校数据加载超时'));
                }, 5000);
            });
        }
    } catch (error) {
        throw error;
    }
}

// 使用默认学校数据
function useDefaultSchoolsData() {
    window.huizhouSchools = {
        highSchools: [
            {
                id: 1,
                name: "惠州市第一中学",
                type: "重点高中",
                location: "惠城区",
                established: 1929,
                scoreRequirement: { min: 620, max: 680, average: 650 },
                features: ["广东省一级学校", "国家级示范性普通高中"],
                advantages: ["学术氛围浓厚", "高考成绩突出"],
                disadvantages: ["学习压力较大", "录取分数要求高"],
                specialties: [{ name: "理科实验班", description: "重点培养理工科人才" }],
                contact: { address: "惠州市惠城区南坛路28号", phone: "0752-2234567" },
                ranking: 1
            }
        ],
        vocationalSchools: [
            {
                id: 101,
                name: "惠州工程技术学校",
                type: "工科中专",
                location: "惠城区",
                established: 1978,
                scoreRequirement: { min: 400, max: 520, average: 460 },
                features: ["广东省重点中等职业学校", "校企合作示范单位"],
                advantages: ["工科专业实力强", "就业率高"],
                disadvantages: ["理论学习相对较少"],
                specialties: [{ name: "机电技术应用", description: "培养机电设备维修技术人员" }],
                contact: { address: "惠州市惠城区马安镇", phone: "0752-2234777" },
                ranking: 1
            }
        ],
        technicalSchools: [
            {
                id: 201,
                name: "惠州市技师学院",
                type: "高级技工",
                location: "惠城区",
                established: 1979,
                scoreRequirement: { min: 300, max: 450, average: 380 },
                features: ["国家级重点技工院校", "高技能人才培养基地"],
                advantages: ["技术培训全面", "校企合作深入"],
                disadvantages: ["工作环境可能较艰苦"],
                specialties: [{ name: "模具制造", description: "模具设计、制造、维修" }],
                contact: { address: "惠州市惠城区马安镇", phone: "0752-2234222" },
                ranking: 1
            }
        ]
    };
}

// 应用学校筛选
function applySchoolFilter() {
    const schoolType = document.getElementById('school-type').value;
    const location = document.getElementById('school-location').value;
    const score = parseInt(document.getElementById('score-range').value);
    
    // 清空当前显示
    clearSchoolDisplay();
    
    // 根据筛选条件显示学校
    if (schoolType === 'all' || schoolType === 'high-school') {
        const filteredHighSchools = filterSchoolsByCriteria(huizhouSchools.highSchools, location, score);
        displaySchools(filteredHighSchools, 'high-school');
    }
    
    if (schoolType === 'all' || schoolType === 'vocational') {
        const filteredVocationalSchools = filterSchoolsByCriteria(huizhouSchools.vocationalSchools, location, score);
        displaySchools(filteredVocationalSchools, 'vocational');
    }
    
    if (schoolType === 'all' || schoolType === 'technical') {
        const filteredTechnicalSchools = filterSchoolsByCriteria(huizhouSchools.technicalSchools, location, score);
        displaySchools(filteredTechnicalSchools, 'technical');
    }
}

// 根据条件筛选学校
function filterSchoolsByCriteria(schools, location, score) {
    return schools.filter(school => {
        // 区域筛选
        if (location !== 'all' && school.location !== location) {
            return false;
        }
        
        // 分数筛选
        if (score < school.scoreRequirement.min - 50 || score > school.scoreRequirement.max + 50) {
            return false;
        }
        
        return true;
    });
}

// 清空学校显示
function clearSchoolDisplay() {
    const schoolGrids = document.querySelectorAll('.schools-grid');
    schoolGrids.forEach(grid => {
        grid.innerHTML = '';
    });
}

// 按类型显示学校
function displaySchoolsByType(type) {
    let schools = [];
    let containerId = '';
    
    switch(type) {
        case 'high-school':
            schools = huizhouSchools.highSchools;
            containerId = 'high-school-tab';
            break;
        case 'vocational':
            schools = huizhouSchools.vocationalSchools;
            containerId = 'vocational-tab';
            break;
        case 'technical':
            schools = huizhouSchools.technicalSchools;
            containerId = 'tech-tab';
            break;
    }
    
    displaySchools(schools, type);
}

// 显示学校列表
function displaySchools(schools, type) {
    const containerId = `${type}-tab`;
    const container = document.querySelector(`#${containerId} .schools-grid`);
    
    if (!container) return;
    
    schools.forEach(school => {
        const schoolCard = createSchoolCard(school, type);
        container.appendChild(schoolCard);
    });
}

// 创建学校卡片
function createSchoolCard(school, type) {
    const card = document.createElement('div');
    card.className = 'school-card';
    card.dataset.schoolId = school.id;
    card.dataset.schoolType = type;
    
    // 学校特色预览（最多3个）
    const featuresPreview = school.features.slice(0, 3);
    const specialtiesPreview = school.specialties.slice(0, 3);
    
    // 确定公立/私立标识的颜色
    const ownershipColor = school.ownership === '公立' ? '#10b981' : '#f59e0b';
    
    card.innerHTML = `
        <div class="school-card-header">
            <div class="school-card-title">
                <h3>${school.name}</h3>
                <div class="school-header-tags">
                    <span class="school-rank">第${school.ranking}名</span>
                    <span class="school-ownership" style="background: ${ownershipColor}">${school.ownership}</span>
                </div>
            </div>
            <div>
                <span class="school-type">${school.type}</span>
                <span class="school-location">${school.location}</span>
            </div>
        </div>
        <div class="school-card-body">
            <div class="score-info">
                <div class="score-item">
                    <span class="score-label">最低分</span>
                    <span class="score-value">${school.scoreRequirement.min}</span>
                </div>
                <div class="score-item">
                    <span class="score-label">平均分</span>
                    <span class="score-value">${school.scoreRequirement.average}</span>
                </div>
                <div class="score-item">
                    <span class="score-label">最高分</span>
                    <span class="score-value">${school.scoreRequirement.max}</span>
                </div>
            </div>
            
            <div class="school-features">
                <h4><i class="fas fa-star"></i> 学校特色</h4>
                <ul class="feature-list">
                    ${featuresPreview.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="specialties-preview">
                <h4><i class="fas fa-graduation-cap"></i> 特色专业</h4>
                <div class="specialty-tags">
                    ${specialtiesPreview.map(specialty => 
                        `<span class="specialty-tag">${specialty.name}</span>`
                    ).join('')}
                </div>
            </div>
        </div>
        <div class="school-card-footer">
            <button class="view-details-btn" onclick="showSchoolDetails('${type}', ${school.id})">
                <i class="fas fa-info-circle"></i> 查看详情
            </button>
        </div>
    `;
    
    return card;
}

// 显示学校详情
function showSchoolDetails(type, id) {
    const school = getSchoolDetails(type, id);
    if (!school) return;
    
    const modal = document.getElementById('school-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.querySelector('.modal-body');
    
    // 设置模态框标题
    modalTitle.textContent = school.name;
    
    // 生成详情内容
    modalBody.innerHTML = createSchoolDetailsHTML(school, type);
    
    // 显示模态框
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // 添加关闭事件
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.onclick = closeSchoolModal;
    
    // 点击背景关闭
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeSchoolModal();
        }
    };
    
    // ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSchoolModal();
        }
    });
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

// 创建学校详情HTML
function createSchoolDetailsHTML(school, type) {
    return `
        <div class="modal-section">
            <h4><i class="fas fa-info-circle"></i> 基本信息</h4>
            <div class="info-grid">
                <div class="info-item">
                    <span class="info-label">学校类型</span>
                    <span class="info-value">${school.type}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">所在区域</span>
                    <span class="info-value">${school.location}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">学校性质</span>
                    <span class="info-value" style="color: ${school.ownership === '公立' ? '#10b981' : '#f59e0b'}; font-weight: bold;">${school.ownership}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">建校时间</span>
                    <span class="info-value">${school.established}年</span>
                </div>
                <div class="info-item">
                    <span class="info-label">综合排名</span>
                    <span class="info-value">第${school.ranking}名</span>
                </div>
            </div>
            
            <div class="info-grid">
                <div class="info-item">
                    <span class="info-label">最低录取分</span>
                    <span class="info-value">${school.scoreRequirement.min}分</span>
                </div>
                <div class="info-item">
                    <span class="info-label">平均录取分</span>
                    <span class="info-value">${school.scoreRequirement.average}分</span>
                </div>
                <div class="info-item">
                    <span class="info-label">最高录取分</span>
                    <span class="info-value">${school.scoreRequirement.max}分</span>
                </div>
            </div>
        </div>
        
        <div class="modal-section">
            <h4><i class="fas fa-star"></i> 学校特色</h4>
            <ul class="feature-list">
                ${school.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section">
            <h4><i class="fas fa-balance-scale"></i> 优劣势分析</h4>
            <div class="pros-cons-grid">
                <div>
                    <h5 style="color: #16a34a; margin-bottom: 0.5rem;">优势</h5>
                    <ul class="pros-list">
                        ${school.advantages.map(advantage => `<li>${advantage}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h5 style="color: #dc2626; margin-bottom: 0.5rem;">劣势</h5>
                    <ul class="cons-list">
                        ${school.disadvantages.map(disadvantage => `<li>${disadvantage}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="modal-section">
            <h4><i class="fas fa-graduation-cap"></i> 特色专业</h4>
            <table class="specialties-table">
                <thead>
                    <tr>
                        ${type === 'technical' ? 
                            '<th>专业名称</th><th>描述</th><th>就业方向</th><th>薪资范围</th><th>技能等级</th>' : 
                            '<th>专业名称</th><th>描述</th><th>就业方向</th><th>薪资范围</th>'}
                    </tr>
                </thead>
                <tbody>
                    ${school.specialties.map(specialty => `
                        <tr>
                            <td><strong>${specialty.name}</strong></td>
                            <td>${specialty.description}</td>
                            <td>${specialty.employment || '--'}</td>
                            <td>${specialty.salary || '--'}</td>
                            ${type === 'technical' ? `<td>${specialty.skillLevel || '--'}</td>` : ''}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        
        ${school.detailed_description ? `
        <div class="modal-section">
            <h4><i class="fas fa-file-alt"></i> 学校详细介绍</h4>
            <p class="detailed-description">${school.detailed_description}</p>
            
            ${school.facilities ? `
            <div class="facilities-section">
                <h5><i class="fas fa-building"></i> 主要实训设施</h5>
                <div class="facilities-tags">
                    ${school.facilities.map(facility => `<span class="facility-tag">${facility}</span>`).join('')}
                </div>
            </div>
            ` : ''}
            
            ${school.certifications ? `
            <div class="certifications-section">
                <h5><i class="fas fa-certificate"></i> 可获取证书</h5>
                <div class="certifications-tags">
                    ${school.certifications.map(cert => `<span class="certification-tag">${cert}</span>`).join('')}
                </div>
            </div>
            ` : ''}
        </div>
        ` : ''}
        
        <div class="modal-section">
            <h4><i class="fas fa-address-book"></i> 联系方式</h4>
            <div class="contact-info">
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${school.contact.address}</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <span>${school.contact.phone}</span>
                </div>
                ${school.contact.website ? `
                <div class="contact-item">
                    <i class="fas fa-globe"></i>
                    <span><a href="${school.contact.website}" target="_blank">${school.contact.website}</a></span>
                </div>
                ` : ''}
            </div>
        </div>
    `;
}

// 关闭学校模态框
function closeSchoolModal() {
    const modal = document.getElementById('school-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // 移除事件监听器
    document.removeEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeSchoolModal();
    });
}

// 初始化模态框关闭按钮
document.addEventListener('DOMContentLoaded', function() {
    const modalCloseBtn = document.querySelector('.modal-close');
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeSchoolModal);
    }
});