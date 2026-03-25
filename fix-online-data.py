#!/usr/bin/env python3
"""
修复在线schools-data.js文件中的重复ownership属性
"""

import re
import sys

def fix_duplicate_ownership_in_file(filepath):
    """修复文件中的重复ownership属性"""
    
    print(f"🔧 修复文件: {filepath}")
    
    # 读取文件内容
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 查找并修复重复的ownership属性
    # 模式：查找 ownership: "..." 后面跟着逗号，然后可能有一些空格，然后又出现 ownership:
    pattern = r'(ownership:\s*"[^"]+"\s*,\s*\n\s*)ownership:\s*"[^"]+"'
    
    # 统计修复数量
    fixes = 0
    lines = content.split('\n')
    fixed_lines = []
    
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # 检查当前行是否有ownership
        if 'ownership:' in line and i+1 < len(lines):
            next_line = lines[i+1]
            # 如果下一行也有ownership，跳过下一行
            if 'ownership:' in next_line:
                print(f"  发现重复的ownership属性，删除第{i+2}行")
                fixed_lines.append(line)  # 保留当前行
                i += 2  # 跳过下一行
                fixes += 1
                continue
        
        fixed_lines.append(line)
        i += 1
    
    if fixes > 0:
        # 写入修复后的内容
        fixed_content = '\n'.join(fixed_lines)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"✅ 修复了 {fixes} 处重复的ownership属性")
        
        # 验证修复
        verify_fix(filepath)
    else:
        print("✅ 未发现重复的ownership属性")
    
    return fixes

def verify_fix(filepath):
    """验证修复结果"""
    print("🔍 验证修复结果...")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 检查是否有重复的ownership在同一对象中
    lines = content.split('\n')
    in_object = 0
    ownership_in_object = False
    errors = []
    
    for i, line in enumerate(lines, 1):
        # 统计大括号
        in_object += line.count('{')
        in_object -= line.count('}')
        
        if 'ownership:' in line:
            if ownership_in_object and in_object > 0:
                errors.append(f"第{i}行: 在同一个对象中发现重复的ownership属性")
            ownership_in_object = True
        
        # 如果离开当前对象，重置标志
        if in_object <= 0:
            ownership_in_object = False
    
    if errors:
        print("❌ 验证失败:")
        for error in errors:
            print(f"   {error}")
        return False
    else:
        print("✅ 验证通过，没有重复的ownership属性")
        return True

def count_schools(filepath):
    """统计学校数量"""
    print("📊 统计学校数量...")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 统计各种类型的学校
    high_schools = re.findall(r'highSchools:\s*\[(.*?)\]', content, re.DOTALL)
    vocational_schools = re.findall(r'vocationalSchools:\s*\[(.*?)\]', content, re.DOTALL)
    technical_schools = re.findall(r'technicalSchools:\s*\[(.*?)\]', content, re.DOTALL)
    
    high_count = 0
    vocational_count = 0
    technical_count = 0
    
    if high_schools:
        # 统计对象数量
        objects = re.findall(r'\{.*?\}', high_schools[0], re.DOTALL)
        high_count = len(objects)
    
    if vocational_schools:
        objects = re.findall(r'\{.*?\}', vocational_schools[0], re.DOTALL)
        vocational_count = len(objects)
    
    if technical_schools:
        objects = re.findall(r'\{.*?\}', technical_schools[0], re.DOTALL)
        technical_count = len(objects)
    
    total = high_count + vocational_count + technical_count
    
    print(f"   高中: {high_count} 所")
    print(f"   中专/职高: {vocational_count} 所")
    print(f"   技工学校: {technical_count} 所")
    print(f"   总计: {total} 所学校")
    
    return {
        'high': high_count,
        'vocational': vocational_count,
        'technical': technical_count,
        'total': total
    }

def main():
    """主函数"""
    if len(sys.argv) < 2:
        print("用法: python3 fix-online-data.py <文件路径>")
        print("示例: python3 fix-online-data.py schools-data.js")
        sys.exit(1)
    
    filepath = sys.argv[1]
    
    print("=" * 60)
    print("学校数据修复工具")
    print("=" * 60)
    
    # 1. 统计修复前的学校数量
    print("\n1. 修复前统计:")
    before_stats = count_schools(filepath)
    
    # 2. 修复重复的ownership属性
    print("\n2. 修复重复属性:")
    fixes = fix_duplicate_ownership_in_file(filepath)
    
    # 3. 统计修复后的学校数量
    print("\n3. 修复后统计:")
    after_stats = count_schools(filepath)
    
    # 4. 总结
    print("\n4. 修复总结:")
    print("=" * 40)
    
    if fixes > 0:
        print(f"✅ 成功修复 {fixes} 处重复的ownership属性")
    else:
        print("ℹ️  未发现需要修复的问题")
    
    print(f"\n📊 学校数量对比:")
    print(f"   高中: {before_stats['high']} → {after_stats['high']}")
    print(f"   中专/职高: {before_stats['vocational']} → {after_stats['vocational']}")
    print(f"   技工学校: {before_stats['technical']} → {after_stats['technical']}")
    print(f"   总计: {before_stats['total']} → {after_stats['total']}")
    
    if before_stats['total'] == 3 and after_stats['total'] > 3:
        print("\n🎉 修复成功！现在应该显示更多学校了")
    elif before_stats['total'] == after_stats['total']:
        print("\nℹ️  学校数量未变化")
    
    print("\n💡 建议:")
    print("   1. 提交并推送修复后的文件")
    print("   2. 等待GitHub Pages部署完成")
    print("   3. 清除浏览器缓存后刷新网站")
    print("=" * 60)

if __name__ == "__main__":
    main()