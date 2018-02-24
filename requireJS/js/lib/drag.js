define(['jqueryui'], function () {
    var sortDrag = function(){
        var graphId = "";
        var startIndex = 0;
        var endIndex = 0;

        $("#sortable").sortable({

            start: function (e, ui){
                startIndex = ui.item.index();
            },
            stop: function (e, ui) {
                endIndex = ui.item.index();

                if (endIndex !== startIndex) {
                    var dragEl = $("#save-box").find(".el").eq(startIndex);

                    // 第一个元素移动
                    if(startIndex == 0){    
                       // alert("第一个元素移动");             
                        $("#save-box").find(".el").eq(endIndex).after(dragEl);
                    } 
                    // 非第一个元素移到第一个元素
                    if (startIndex !== 0 && endIndex == 0) {  
                       // alert("非第一个元素移到第一个元素");            
                        $("#save-box").find(".el").eq(0).before(dragEl);
                    }
                    // 非最后一个元素移到最后一个
                    if (endIndex !== 0 && endIndex == $("#save-box").find(".el").length-1) {
                       // alert("非最后一个元素移到最后一个");
                        $("#save-box").find(".el").eq(endIndex).after(dragEl);
                    }
                    // 其他
                    if (startIndex !== 0 && endIndex !== 0 && endIndex !== $("#save-box").find(".el").length-1) {
                       // alert("其他");
                        if (startIndex < endIndex){
                            $("#save-box").find(".el").eq(endIndex).after(dragEl);
                        }
                        if (startIndex > endIndex) {
                            $("#save-box").find(".el").eq(endIndex).before(dragEl);
                        }
                    }
                }
            }
        });

        $("#ul .el").draggable({
            addClasses: false,
            // 如果使用了该选项，被拖动的元素可以被放置于一个应用了排序组件的元素列表中并成为该列表的一部分
            connectToSortable: "#sortable",
            // 如果值设置为"clone", 那么该元素将会被复制，并且被复制的元素将被拖动。
            helper: "clone",
            // 只有在特定的元素上触发鼠标按下事件时，才可以拖动
            //	handle: ".drag",
            // 只有移动指定像素后才开始激活拖拽动作
          //  "distance": 30,
            // 当拖动开始时触发回调函数。
            start: function (e, ui) {
                console.log("开始"); 
            },
            drag: function (e, ui) {
                // ui.helper 代表被拖动的元素
            },
            stop: function (e, ui) {

                // 只有被拖动到了指定区域(.edit-box)放开才会渲染、存储
                var disGragLeft = ui.offset.left;
                var disGragTop = ui.offset.top;
                var dragrect = ui.helper.width() / 2; // 校正数
                var disBoxLeft = $(".edit-box").offset().left;
                var disBoxTop = $(".edit-box").offset().top;
                var BoxW = $(".edit-box").outerWidth(true);
                var BoxH = $(".edit-box").outerHeight(true);
                var disBoxRight = BoxW + disBoxLeft;
                var disBoxBottom = BoxH + disBoxTop;
                if (
                    (disGragLeft + dragrect) > disBoxLeft &&
                    (disGragLeft - dragrect) < disBoxRight &&
                    (disGragTop + dragrect) > disBoxTop &&
                    (disGragTop - dragrect) < disBoxBottom
                ) {
                    // 动态添加一个时间戳转36进制的id 
                    graphId = new Date().getTime().toString(36);
                    ui.helper.children(".demo").prop("id", graphId);

                    // 逐条记录放入编辑框的标签，方便存储
                    var saveOriginal = ui.helper.prop("outerHTML");
                    $("#save-box").append(saveOriginal);

                    // 按需加载图表
                    var graphType = ui.helper.children(".demo").attr("data-graph-type");
                    var deps = "graph/" + graphType;
                   
                    // 创建数据盒子
                    var setData = {};
                    // 设置数据
                    setData = {
                        "name": "访问来源", // 图表名称
                        "item": ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'], // 所有项目
                        "radius": ['50%', '70%'], // 环型号
                        "data": [
                            { value: 335, name: '直接访问' },
                            { value: 310, name: '邮件营销' },
                            { value: 234, name: '联盟广告' },
                            { value: 135, name: '视频广告' },
                            { value: 1548, name: '搜索引擎' }
                        ]
                    };

                    require([deps], function (graphType) {
                        graphType.myChart(graphId, setData);
                    });
                }
                console.log("结束" + graphType);
            }
        });
    }

    return {
        sortDrag: sortDrag
    }
});
