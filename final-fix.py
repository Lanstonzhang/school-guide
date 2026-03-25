#!/usr/bin/env python3
"""
最终修复脚本：删除所有重复的ownership属性
"""

import re
import sys

def fix_all_duplicates(filepath):
    """修复文件中所有重复的ownership属性"""
    
    print(f"🔧 修复文件: {filepath}")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 查找模式：ownership: "..." 后面跟着逗号和换行，然后又出现 ownership:
    # 我们需要找到所有这种情况并删除第二个ownership
    
    lines = content.split('\n')
    fixed_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # 检查当前行是否有ownership
        if 'ownership:' in line:
            # 检查下一行是否也有ownership
            if i + 1 < len(lines) and 'ownership:' in lines[i + 1]:
                print(f"  发现重复的ownership属性 (行 {i+1} 和 {i+2})")
                # 保留第一个，跳过第二个
                fixed_lines.append(line)
                i += 2
                continue
            # 检查当前行内是否有重复（同一行有两个ownership）
            elif line.count('ownership:') > 1:
                print(f"  发现同一行内的重复ownership属性 (行 {i+1})")
                # 只保留第一个ownership
                parts = line.split('ownership:')
                # 第一个部分 + 第一个ownership + 剩余部分（去掉第二个ownership）
                first_ownership = 'ownership:' + parts[1].split(',')[0] + ','
                # 找到第一个ownership后的位置
                first_end = line.find(first_ownership) + len(first_ownership)
                # 获取第一个ownership之后的内容，去掉第二个ownership
                rest = line[first_end:].replace('ownership:', '').strip()
                if rest.startswith(','):
                    rest = rest[1:].strip()
                fixed_line = line[:first_end] + ' ' + rest
                fixed_lines.append(fixed_line)
                i += 1
                continue
        
        fixed_lines.append(line)
        i += 1
    
    # 写入修复后的文件
    fixed_content = '\n'.join(fixed_lines)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(fixed_content)
    
    print(f"✅ 修复完成，已保存到: {filepath}")
    
    # 验证修复
    return verify_fix(filepath)

def verify_fix(filepath):
    """验证修复结果"""
    print("\n🔍 验证修复结果...")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    errors = []
    
    for i in range(len(lines)):
        line = lines[i]
        
        # 检查同一行内的重复
        if line.count('ownership:') > 1:
            errors.append(f"行 {i+1}: 同一行内有多个ownership属性")
        
        # 检查相邻行的重复
        if i > 0 and 'ownership:' in line and 'ownership:' in lines[i-1]:
            # 检查是否在同一个对象内（简单检查）
            if lines[i-1].strip().endswith(',') or line.strip().startswith('ownership:'):
                errors.append(f"行 {i} 和 {i+1}: 相邻行有重复的ownership属性")
    
    if errors:
        print("❌ 验证失败，仍有重复:")
        for error in errors:
            print(f"   {error}")
        return False
    else:
        print("✅ 验证通过，没有重复的ownership属性")
        return True

def count_schools(filepath):
    """统计学校数量"""
    print("\n📊 统计学校数量:")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 简单统计id数量
    ids = re.findall(r'\bid:\s*(\d+)', content)
    unique_ids = set(ids)
    
    print(f"   找到 {len(unique_ids)} 所不同的学校")
    
    # 显示前10个学校
    print("   前10所学校ID:", sorted(list(unique_ids))[:10])
    
    return len(unique_ids)

def main():
    if len(sys.argv) < 2:
        print("用法: python3 final-fix.py <文件路径>")
        sys.exit(1)
    
    filepath = sys.argv[1]
    
    print("=" * 60)
    print("最终修复工具 - 删除重复的ownership属性")
    print("=" * 60)
    
    # 修复文件
    success = fix_all_duplicates(filepath)
    
    if success:
        # 统计学校数量
        school_count = count_schools(filepath)
        
        print("\n" + "=" * 60)
        print("修复完成总结")
        print("=" * 60)
        
        if school_count >= 8:
            print(f"✅ 修复成功！找到 {school_count} 所学校")
            print("   网站现在应该能显示所有学校了")
        else:
            print(f"⚠️  只找到 {school_count} 所学校，可能仍有问题")
        
        print("\n💡 下一步:")
        print("   1. 提交并推送修复后的文件")
        print("   2. 等待GitHub Pages部署")
        print("   3. 清除浏览器缓存测试")
    else:
        print("\n❌ 修复失败，请手动检查文件")
    
    print("=" * 60)

if __name__ == "__main__":
    main()