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
        data:['����','�ճ�']
    },
    dataRange: {
        min: 0,
        max: 25,
        x: 'left',
        y: 'bottom',
        text:['��','��'],           // �ı���Ĭ��Ϊ��ֵ�ı�
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
            name: '����',
            type: 'map',
            mapType: 'china',
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
              
                {name: '����',value: 24.82},
               
                {name: 'ɽ��',value: 12.41},
               
                
                {name: '����',value: 11.68},
                
                {name: '�㶫',value: 9.49},
                {name: '�ӱ�',value: 6.57},
                {name: '����',value: 5.84},
                
                {name: '����',value: 4.38},
               
                {name: '����',value: 4.38},
                {name: '����',value: 2.92},
                {name: '����',value: 3.65},
                
                {name: '����',value: 2.91},
                {name: 'ɽ��',value: 1.46},
                {name: '����',value: 1.46},
               
                
                {name: '����',value: 1.46},
                {name: '����',value: 1.46},
                {name: '�㽭',value:1.46},
                
                {name: '����',value: 0.73},
               
                {name: '���ɹ�',value: 0.73},
               
                {name: '����',value: 0.73},
                {name: '�Ĵ�',value: 0.73},
                {name: '����',value: 0.73},
       
                
            ]
        },
        {
            name: '�ճ�',
            type: 'map',
            mapType: 'china',
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
               {name: '����',value:19.58},                
                {name: '����',value:19.58},
               
                {name: '�㶫',value: 5.59},
                {name: '����',value: 7.69},
                {name: '�Ĵ�',value: 4.9},
                {name: '����',value: 4.2},
                {name: '����',value: 3.5},
                {name: '����',value: 2.8},
                {name: 'ɽ��',value: 2.8},
                {name: '����',value: 2.8},
                {name: '����',value: 2.8},
                {name: '����',value: 2.1},
                {name: '����',value: 2.1},
                
                {name: '�ӱ�',value: 1.4},
                {name: '����',value: 1.4},
                {name: '�㽭',value: 0.7},
                {name: '����',value: 0.7},
                {name: '���ɹ�',value: 0.7},
                {name: '����',value: 0.7},
                {name: '������',value: 0.7},
                {name: '�½�',value: 0.7},
                {name: '����',value: 0.7},
            ]
        },
       
    ]
};
                    // JavaScript Document