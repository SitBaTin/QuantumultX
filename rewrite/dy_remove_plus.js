/**
 * 抖音去除底部加号按钮
 * Quantumult X 脚本
 */

let body = $response.body;
try {
    let obj = JSON.parse(body);

    if (obj && obj.tab_list) {
        obj.tab_list = obj.tab_list.filter(tab => {
            // 过滤掉包含“plus”或“upload”字段的按钮
            return !(tab.tab_name === "plus" || tab.tab_name?.includes("upload") || tab.label === "+");
        });

        // 重新排序 index（可选）
        obj.tab_list.forEach((tab, index) => {
            tab.tab_id = index;
        });
    }

    body = JSON.stringify(obj);
} catch (e) {
    console.log("抖音去加号处理失败: " + e);
}

$done({ body });
