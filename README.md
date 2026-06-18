# 🔧 追觅配件查询系统

一个简洁高效的配件查询网页应用，支持按配件名称搜索和按国家筛选，快速显示配件料号和图片。

## ✨ 功能特性

- 🔍 **配件名称搜索** - 实时搜索，支持模糊匹配
- 🌍 **国家筛选** - 下拉选择目标国家
- 📷 **图片展示** - 配件图片卡片展示
- 📋 **料号显示** - 清晰展示配件料号信息
- 📱 **响应式设计** - 完美适配手机、平板、电脑
- 🎯 **点击详情** - 点击卡片查看完整配件信息

## 🚀 部署到 GitHub Pages

### 步骤1：创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角 **+** → **New repository**
3. 填写仓库名称，例如 `accessory-search`
4. 选择 **Public**（公开仓库才能使用 GitHub Pages）
5. 点击 **Create repository**

### 步骤2：上传文件

将以下文件上传到仓库根目录：

```
accessory-search/
├── index.html          # 主页面
├── data.js             # 配件数据
├── .github/
│   └── workflows/
│       └── deploy.yml  # 自动部署配置
└── README.md           # 说明文档
```

上传方式：
- 方式A：直接拖拽文件到 GitHub 网页上传
- 方式B：使用 Git 命令行

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/accessory-search.git
git push -u origin main
```

### 步骤3：启用 GitHub Pages

1. 进入仓库 → **Settings** → **Pages**
2. **Source** 选择 **GitHub Actions**
3. 保存后，GitHub Actions 会自动部署

### 步骤4：访问网站

部署完成后，访问地址为：
```
https://你的用户名.github.io/accessory-search/
```

## 📝 替换为真实数据

### 数据结构说明

每个配件对象包含以下字段：

```javascript
{
    id: 1,                          // 唯一编号
    name: "主刷组件",                // 配件名称（必填）
    partNumber: "DREAME-RB-001",    // 料号（必填）
    country: "日本",                 // 国家（必填）
    category: "扫地机",              // 品类（可选）
    image: "图片URL",                // 图片地址（可选）
    description: "说明文字",          // 说明（可选）
    price: "¥89"                    // 价格（可选）
}
```

### 方法1：手动编辑 data.js（适合数据量小）

直接修改 `data.js` 文件中的 `accessoriesData` 数组。

### 方法2：Excel 转 JSON（推荐）

1. 将 Excel 另存为 **CSV 格式**
2. 使用在线转换工具：
   - [csvjson.com](https://csvjson.com/csv2json)
   - [tableconvert.com](https://tableconvert.com/excel-to-json)
3. 确保列名对应：`name`, `partNumber`, `country`, `category`, `image`, `description`, `price`
4. 将生成的 JSON 替换到 `data.js` 中

### 方法3：使用 Python 脚本转换

```python
import pandas as pd
import json

# 读取Excel
df = pd.read_excel('销售配件表.xlsx')

# 重命名列（根据你的实际列名调整）
df = df.rename(columns={
    '配件名称': 'name',
    '料号': 'partNumber',
    '国家': 'country',
    '品类': 'category',
    '图片链接': 'image',
    '说明': 'description',
    '价格': 'price'
})

# 添加id列
df['id'] = range(1, len(df) + 1)

# 转换为JSON
records = df.to_dict('records')

# 保存
with open('data.js', 'w', encoding='utf-8') as f:
    f.write('const accessoriesData = ')
    json.dump(records, f, ensure_ascii=False, indent=4)
    f.write(';')

print(f"已转换 {len(records)} 条数据")
```

## 🖼️ 图片处理建议

1. **网络图床**（推荐）
   - 阿里云 OSS、腾讯云 COS、七牛云等
   - 将图片上传后获取 URL 填入 `image` 字段

2. **GitHub 仓库内图片**
   - 在项目根目录创建 `images/` 文件夹
   - 上传图片后引用相对路径：`images/配件名.jpg`

3. **Base64 编码**（仅适合少量小图）
   - 使用在线工具将图片转为 base64
   - 填入 `image` 字段

## 🛠️ 自定义修改

### 修改品牌名称

编辑 `index.html` 第 7 行：
```html
<title>你的品牌配件查询系统</title>
```

以及搜索框上方的标题文字。

### 修改主题颜色

编辑 `index.html` 中的 CSS 变量，搜索 `#667eea` 和 `#764ba2` 替换为你喜欢的颜色。

### 添加更多字段

如需添加新字段（如库存、适配机型等）：

1. 在 `data.js` 的数据对象中添加新字段
2. 在 `index.html` 的弹窗展示部分添加对应的 HTML

## 📄 文件说明

| 文件 | 说明 |
|------|------|
| `index.html` | 主页面，包含所有 UI 和交互逻辑 |
| `data.js` | 配件数据，可独立编辑替换 |
| `.github/workflows/deploy.yml` | GitHub Actions 自动部署配置 |

## ❓ 常见问题

**Q: 部署后页面空白？**
A: 检查 `data.js` 中的 JSON 格式是否正确，确保没有语法错误。

**Q: 图片不显示？**
A: 检查图片 URL 是否可访问，建议使用 HTTPS 链接。

**Q: 如何添加更多国家？**
A: 直接在 `data.js` 的数据中使用新的国家名称，系统会自动识别并添加到筛选下拉框。

**Q: 如何更新数据？**
A: 修改 `data.js` 后提交到 GitHub，GitHub Actions 会自动重新部署。

## 📧 技术支持

如有问题，请联系：
- 飞书：张威
- 邮箱：zhangwei8@dreame.tech
