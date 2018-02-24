
/**
 * script标签中data-main属性的作用是，指定网页程序的主模块
 * config--配置requirejs依赖。
 * define--创建模块，全局函数。
 * require--读取依赖，全局函数。
 */

// 依赖库、插件
require.config({
    baseUrl: "js/lib",
    paths: {
        "echarts": "plugin/echarts.common.min",
        "jquery": "plugin/jquery.1.9.1.min",
        "jqueryui": "plugin/jquery-ui-draggable-sortable.min",
        "layer": "plugin/layer/layer"
    }
});

require(['layer'], function (layer) {
    // layer插件加载样式所需
    layer.config({
        path: './js/lib/plugin/layer/' //layer.js所在的目录，可以是绝对目录，也可以是相对目录
    });
});

// 主程
require(['jquery'], function($){

    // 图表——拖拽模块
    require(['drag'], function (drag) {
        drag.sortDrag();
    });

    // 保存编辑html
    require(['save'], function (save) {
        save.saveLocalStorage();
        save.initContainer();
        save.clearLocalStorage();           

    });

    // 图表数据处理
    require(['setData'], function (setData) {
        setData.setData();
    });
});
