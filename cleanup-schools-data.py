#!/usr/bin/env python3
"""
清理学校数据文件，修复重复的ownership属性
"""

import re
import sys

def clean_file(input_file, output_file=None):
    """清理文件中的重复ownership属性"""
    
    if output_file is None:
        output_file = input_file
    
    print(f"📁 读取文件: {input_file}")
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    print(f"📊 文件大小: {len(content)} 字符")
    
    # 检查重复的ownership属性
    print("\n🔍 检查重复的ownership属性...")
    
    # 使用正则表达式查找并修复重复的ownership
    # 模式：查找 ownership: "..." 后面可能有逗号，然后又有 ownership:
    pattern = r'ownership:\s*"[^"]+"\s*,\s*\n\s*ownership:\s*"[^"]+"'
    
    # 查找所有匹配
    matches = re.findall(pattern, content, re.DOTALL)
    
    if matches:
        print(f"⚠️  发现 {len(matches)} 处重复的ownership属性")
        
        # 修复：只保留第一个ownership
        fixed_content = content
        for match in matches:
            # 提取第一个ownership
            first_ownership = re.search(r'ownership:\s*"[^"]+"', match).group()
            # 替换整个匹配为第一个ownership
            fixed_content = fixed_content.replace(match, first_ownership)
        
        print("✅ 已修复重复的ownership属性")
        
        # 写入修复后的文件
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"💾 已保存到: {output_file}")
        
        return fixed_content
    else:
        print("✅ 未发现重复的ownership属性")
        return content

def count_schools(content):
    """统计学校数量"""
    
    print("\n📊 统计学校数量:")
    
    # 简单统计id数量
    id_count = len(re.findall(r'\bid:\s*\d+', content))
    print(f"   学校ID总数: {id_count}")
    
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
        print(f"   高中: {high_count} 所")
    
    if vocational_schools:
        objects = re.findall(r'\{.*?\}', vocational_schools[0], re.DOTALL)
        vocational_count = len(objects)
        print(f"   中专/职高: {vocational_count} 所")
    
    if technical_schools:
        objects = re.findall(r'\{.*?\}', technical_schools[0], re.DOTALL)
        technical_count = len(objects)
        print(f"   技工学校: {technical_count} 所")
    
    total = high_count + vocational_count + technical_count
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
        print("用法: python3 cleanup-schools-data.py <输入文件> [输出文件]")
        print("示例: python3 cleanup-schools-data.py schools-data.js")
        print("示例: python3 cleanup-schools-data.py schools-data.js schools-data-fixed.js")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else input_file
    
    print("=" * 60)
    print("学校数据清理工具")
    print("=" * 60)
    
    # 1. 清理文件
    cleaned_content = clean_file(input_file, output_file)
    
    # 2. 统计学校数量
    stats = count_schools(cleaned_content)
    
    # 3. 总结
    print("\n" + "=" * 60)
    print("清理完成总结")
    print("=" * 60)
    
    if stats['total'] >= 22:
        print(f"✅ 数据完整！共有 {stats['total']} 所学校")
        print(f"   包括: {stats['high']} 所高中, {stats['vocational']} 所中专/职高, {stats['technical']} 所技工学校")
    else:
        print(f"⚠️  数据可能不完整，只有 {stats['total']} 所学校")
        print("   建议检查原始数据文件")
    
    print("\n💡 下一步:")
    print("   1. 提交并推送修复后的文件")
    print("   2. 等待GitHub Pages部署")
    print("   3. 清除浏览器缓存后测试")
    print("=" * 60)

if __name__ == "__main__":
    main()