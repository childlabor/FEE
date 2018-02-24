
define(['echarts'], function (echarts) {
    var myChart = function(id){
        var myChart = echarts.init(document.getElementById(id));

        var option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
        };

        myChart.setOption(option);
       // return "6"
    }

    return {
        myChart: myChart
    };
})
