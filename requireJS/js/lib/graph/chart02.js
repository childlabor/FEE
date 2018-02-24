
define(['echarts'], function (echarts) {
    var myChart = function(id){
        var myChart = echarts.init(document.getElementById(id));

        var option = {
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    areaStyle: {}
                }]
            };

        myChart.setOption(option);
    }

    return {
        myChart: myChart
    };
})
