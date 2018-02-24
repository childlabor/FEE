
define(['layer'], function(layer){
    // 本地存储
    var saveLocalStorage = function(){
        // 创建本地存储容器
        var htmlSave = {};
        htmlSave.count = 0;
        htmlSave.list = [];

        $(".save").on("click", function(){
            var savePre = $("#save-box").html();

            htmlSave.list[htmlSave.count] = savePre;
            htmlSave.count++;
            localStorage.setItem("save", JSON.stringify(htmlSave));

            alert("保存成功");           
        });

        $(".copy").on("click", function(){
            var data = JSON.parse(localStorage.getItem("save"));
            if(data == null){
                alert("请先保存编辑")
            }
            alert("保存成功");
            // TODO: 导出

        })
    }

    // 初始化
    var initContainer = function(){
        $(function(){
            var data = JSON.parse(localStorage.getItem("save"));

            if(data != null){
                $(".edit-box").html(data.list[data.count - 1]);
                $("#save-box").html(data.list[data.count - 1]);
                
                var $demo = $(".edit-box").find(".demo");
                $demo.each(function(){
                    var graphId = $(this).prop("id");
                    var graphType = $(this).attr("data-graph-type");
                    var deps = "graph/" + graphType;

                    require([deps], function (graphType) {
                        graphType.myChart(graphId);
                    });
                });   
            } 
            console.log("已刷新  localStorageLength：" + localStorage.length);         
        })      
    }

    // 清空
    var clearLocalStorage = function() {
        $(".clear").on("click", function () {
            localStorage.clear();
            location.reload();

            console.log("已清空  localStorageLength：" + localStorage.length);
        })      
    }

    return {
        saveLocalStorage: saveLocalStorage,
        clearLocalStorage: clearLocalStorage,
        initContainer: initContainer
    }
});