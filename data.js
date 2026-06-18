/**
 * 配件数据文件
 * 
 * 使用说明：
 * 1. 将您的Excel数据转换为以下JSON格式
 * 2. 每个配件是一个对象，包含以下字段：
 *    - id: 唯一编号（数字）
 *    - name: 配件名称（必填）
 *    - partNumber: 料号（必填）
 *    - country: 国家（必填）
 *    - category: 品类（可选，如：扫地机、洗地机等）
 *    - image: 图片URL（可选，支持网络图片地址或本地图片路径）
 *    - description: 说明（可选）
 *    - price: 价格（可选）
 * 
 * 如何替换为真实数据：
 * 方法1：直接编辑此文件，将 accessoriesData 数组替换为您的数据
 * 方法2：将Excel导出为CSV，然后使用在线工具转换为JSON格式
 * 
 * 推荐在线转换工具：
 * - https://csvjson.com/csv2json
 * - https://tableconvert.com/excel-to-json
 * 
 * 图片处理建议：
 * - 将图片上传到图床（如阿里云OSS、腾讯云COS、GitHub仓库等）
 * - 或使用 base64 编码（不推荐，文件会很大）
 * - 或在项目目录中创建 images/ 文件夹，引用相对路径如 "images/xxx.jpg"
 */

const accessoriesData = [
    {
        id: 1,
        name: "主刷组件",
        partNumber: "DREAME-RB-001",
        country: "日本",
        category: "扫地机",
        image: "https://placehold.co/400x300/667eea/ffffff?text=主刷组件",
        description: "适配D10/D10s系列扫地机器人",
        price: "¥89"
    },
    {
        id: 2,
        name: "边刷（右）",
        partNumber: "DREAME-SB-R002",
        country: "日本",
        category: "扫地机",
        image: "https://placehold.co/400x300/764ba2/ffffff?text=边刷",
        description: "右侧边刷，适配全系扫地机",
        price: "¥29"
    },
    {
        id: 3,
        name: "HEPA滤网",
        partNumber: "DREAME-HF-003",
        country: "韩国",
        category: "扫地机",
        image: "https://placehold.co/400x300/f093fb/ffffff?text=HEPA滤网",
        description: "高效过滤，建议每3个月更换",
        price: "¥59"
    },
    {
        id: 4,
        name: "拖布支架",
        partNumber: "DREAME-MS-004",
        country: "韩国",
        category: "扫地机",
        image: "https://placehold.co/400x300/4facfe/ffffff?text=拖布支架",
        description: "磁吸式拖布支架，易拆易装",
        price: "¥45"
    },
    {
        id: 5,
        name: "清洁液（500ml）",
        partNumber: "DREAME-CL-005",
        country: "澳大利亚",
        category: "洗地机",
        image: "https://placehold.co/400x300/43e97b/ffffff?text=清洁液",
        description: "专用地面清洁液，高效去污",
        price: "A$19.9"
    },
    {
        id: 6,
        name: "滚刷盖",
        partNumber: "DREAME-RC-006",
        country: "澳大利亚",
        category: "洗地机",
        image: "https://placehold.co/400x300/feca57/ffffff?text=滚刷盖",
        description: "洗地机滚刷保护盖",
        price: "A$12.9"
    },
    {
        id: 7,
        name: "尘盒滤芯",
        partNumber: "DREAME-DF-007",
        country: "中国",
        category: "吸尘器",
        image: "https://placehold.co/400x300/ff6b6b/ffffff?text=尘盒滤芯",
        description: "可水洗滤芯，建议定期更换",
        price: "¥39"
    },
    {
        id: 8,
        name: "充电底座",
        partNumber: "DREAME-CB-008",
        country: "中国",
        category: "扫地机",
        image: "https://placehold.co/400x300/48dbfb/ffffff?text=充电底座",
        description: "原装充电底座，含电源适配器",
        price: "¥199"
    },
    {
        id: 9,
        name: "清水箱",
        partNumber: "DREAME-WT-009",
        country: "日本",
        category: "洗地机",
        image: "https://placehold.co/400x300/1dd1a1/ffffff?text=清水箱",
        description: "大容量清水箱，900ml",
        price: "¥79"
    },
    {
        id: 10,
        name: "污水箱",
        partNumber: "DREAME-ST-010",
        country: "日本",
        category: "洗地机",
        image: "https://placehold.co/400x300/5f27cd/ffffff?text=污水箱",
        description: "带固液分离功能污水箱",
        price: "¥89"
    },
    {
        id: 11,
        name: "吹风机风嘴",
        partNumber: "DREAME-HN-011",
        country: "韩国",
        category: "个护",
        image: "https://placehold.co/400x300/ff9ff3/ffffff?text=吹风机风嘴",
        description: "磁吸式造型风嘴",
        price: "₩15,000"
    },
    {
        id: 12,
        name: "空气净化器滤网",
        partNumber: "DREAME-AF-012",
        country: "澳大利亚",
        category: "空净",
        image: "https://placehold.co/400x300/54a0ff/ffffff?text=空净滤网",
        description: "复合滤网，除甲醛PM2.5",
        price: "A$49.9"
    }
];
