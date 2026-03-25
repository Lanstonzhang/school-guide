// 调试学校数据显示问题

console.log("🔍 开始调试学校数据显示问题...");

// 1. 检查数据是否加载
if (typeof huizhouSchools === 'undefined') {
    console.error("❌ huizhouSchools 未定义");
} else {
    console.log("✅ huizhouSchools 已定义");
    
    // 2. 统计学校数量
    const highCount = huizhouSchools.highSchools ? huizhouSchools.highSchools.length : 0;
    const vocationalCount = huizhouSchools.vocationalSchools ? huizhouSchools.vocationalSchools.length : 0;
    const technicalCount = huizhouSchools.technicalSchools ? huizhouSchools.technicalSchools.length : 0;
    
    console.log(`📊 学校统计:`);
    console.log(`   高中: ${highCount} 所`);
    console.log(`   中专/职高: ${vocationalCount} 所`);
    console.log(`   技工学校: ${technicalCount} 所`);
    console.log(`   总计: ${highCount + vocationalCount + technicalCount} 所学校`);
    
    // 3. 检查显示函数
    if (typeof displaySchoolsByType === 'function') {
        console.log("✅ displaySchoolsByType 函数可用");
        
        // 测试显示高中
        console.log("测试显示高中...");
        try {
            displaySchoolsByType('high-school');
            console.log("✅ 高中显示函数执行成功");
        } catch (error) {
            console.error(`❌ 高中显示函数错误: ${error.message}`);
        }
    } else {
        console.error("❌ displaySchoolsByType 函数未定义");
    }
    
    // 4. 检查HTML容器
    const containers = [
        'high-school-tab',
        'vocational-tab', 
        'tech-tab'
    ];
    
    containers.forEach(containerId => {
        const container = document.querySelector(`#${containerId} .schools-grid`);
        if (container) {
            console.log(`✅ 容器 #${containerId} .schools-grid 找到`);
        } else {
            console.error(`❌ 容器 #${containerId} .schools-grid 未找到`);
        }
    });
}

console.log("🔍 调试完成");