# 部署信息

## 网站地址
**主访问地址**: https://lanstonzhang.github.io/school-guide/

**备用地址**: https://lanstonzhang.github.io/school-guide/index.html

## GitHub仓库
- **仓库地址**: https://github.com/Lanstonzhang/school-guide
- **分支**: main
- **部署方式**: GitHub Pages (通过GitHub Actions自动部署)

## 本地测试
如需在本地测试，可以运行:
```bash
python3 -m http.server 8080
```
然后访问: http://localhost:8080

## 文件结构
```
├── index.html          # 主页面
├── style.css          # 样式文件
├── script.js          # 主脚本文件
├── schools-data.js    # 22所职业学校数据库
├── test.html          # 测试页面
├── README.md          # 项目说明
└── .github/workflows/deploy.yml  # GitHub Pages部署配置
```

## 功能验证
1. 访问 https://lanstonzhang.github.io/school-guide/
2. 点击导航栏"惠州学校"
3. 测试筛选功能（类型、区域、分数）
4. 查看学校详情页面

## 更新网站
要更新网站内容，只需:
1. 修改本地文件
2. 提交到GitHub
3. GitHub Actions会自动部署到GitHub Pages