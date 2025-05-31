// dy_remove_plus.js
let body = $response.body;

try {
    let obj = JSON.parse(body);
    console.log("✅ 原始 tab_list 数量: " + obj?.tab_list?.length);

    if (obj?.tab_list) {
        obj.tab_list = obj.tab_list.filter(tab => {
            return !(tab.tab_name === "plus" || tab.tab_name?.includes("upload") || tab.label === "+");
        });

        console.log("✅ 处理后 tab_list 数量: " + obj.tab_list.length);
    }

    $done({ body: JSON.stringify(obj) });

} catch (e) {
    console.log("❌ 抖音去加号脚本异常: " + e);
    $done({});
}
