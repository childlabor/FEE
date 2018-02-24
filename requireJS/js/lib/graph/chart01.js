
define(['echarts'], function (echarts) {
    var myChart = function (id, prameData){
              
        // 默认数据
        var defaultGraphData = {
            "name": "访问来源1", // 图表名称
            "item": ['直接访问1', '邮件营销1', '联盟广告1', '视频广告1', '搜索引擎1'], // 所有项目
            "radius": ['50%', '70%'], // 环型号
            "data": [
                { value: 335, name: '直接访问1' },
                { value: 310, name: '邮件营销1' },
                { value: 234, name: '联盟广告1' },
                { value: 135, name: '视频广告1' },
                { value: 1548, name: '搜索引擎1' }
            ]
        }
        // 对象的合并（后面参数合并覆盖第一个目标参数，第一个参数不能为null或undefined），因此将第一个参数作为默认数据，第二个为传入的参数（界面设置）
        var graphData = Object.assign(defaultGraphData, prameData);

        var myChart = echarts.init(document.getElementById(id));

        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: graphData.item
            },
            series: [
                {
                    name: graphData.name,
                    type:'pie',
                    radius: graphData.radius,
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: graphData.data
                }
            ]
        };

        myChart.setOption(option);
    }

    return {
        myChart: myChart
    };
})
