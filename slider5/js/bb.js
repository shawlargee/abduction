option = {
    title : {
       
        x:'center'
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        x:'left',
        data:['拐入','拐出']
    },
    dataRange: {
        min: 0,
        max: 25,
        x: 'left',
        y: 'bottom',
        text:['高','低'],           // 文本，默认为数值文本
        calculable : false
    },
    toolbox: {
        show : true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: false},
            dataView : {show: false, readOnly: false},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    series : [{
            name: '拐入',
            type: 'map',
            mapType: 'china',
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
              
                {name: '河南',value: 24.82},
               
                {name: '山东',value: 12.41},
               
                
                {name: '福建',value: 11.68},
                
                {name: '广东',value: 9.49},
                {name: '河北',value: 6.57},
                {name: '江苏',value: 5.84},
                
                {name: '贵州',value: 4.38},
               
                {name: '云南',value: 4.38},
                {name: '北京',value: 2.92},
                {name: '广西',value: 3.65},
                
                {name: '江西',value: 2.91},
                {name: '山西',value: 1.46},
                {name: '陕西',value: 1.46},
               
                
                {name: '重庆',value: 1.46},
                {name: '安徽',value: 1.46},
                {name: '浙江',value:1.46},
                
                {name: '湖北',value: 0.73},
               
                {name: '内蒙古',value: 0.73},
               
                {name: '海南',value: 0.73},
                {name: '四川',value: 0.73},
                {name: '甘肃',value: 0.73},
       
                
            ]
        },
        {
            name: '拐出',
            type: 'map',
            mapType: 'china',
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
               {name: '河南',value:19.58},                
                {name: '云南',value:19.58},
               
                {name: '广东',value: 5.59},
                {name: '广西',value: 7.69},
                {name: '四川',value: 4.9},
                {name: '福建',value: 4.2},
                {name: '贵州',value: 3.5},
                {name: '江苏',value: 2.8},
                {name: '山西',value: 2.8},
                {name: '安徽',value: 2.8},
                {name: '北京',value: 2.8},
                {name: '陕西',value: 2.1},
                {name: '重庆',value: 2.1},
                
                {name: '河北',value: 1.4},
                {name: '江西',value: 1.4},
                {name: '浙江',value: 0.7},
                {name: '湖北',value: 0.7},
                {name: '内蒙古',value: 0.7},
                {name: '海南',value: 0.7},
                {name: '黑龙江',value: 0.7},
                {name: '新疆',value: 0.7},
                {name: '湖南',value: 0.7},
            ]
        },
       
    ]
};
                    // JavaScript Document