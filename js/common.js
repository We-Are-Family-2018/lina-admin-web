var bookTypes = [
    { 
        typeCode: 0,
        description: '哲学'
    },
    {
        typeCode: 1,
        description: '文学'
    },
    {
        typeCode: 2,
        description: '经管'
    },
    {
        typeCode: 3,
        description: '人文'
    },
    {
        typeCode: 4,
        description: '计算机'
    },
    {
        typeCode: 5,
        description: '科技'
    }
]

function findBookTypeCode(description) {
    var code = '';
    bookTypes.forEach(function(value, index, array){
        if (value.description === description) {
            code = value.typeCode;
        }
    });
    return code;
}

function findBookTypeDescription(code) {
    var description = '';
    bookTypes.forEach(function(value, index, array){
        if (value.typeCode == code) {
            description = value.description;
        }
    });
    return description;
}

var orderStatus = [
    { 
        code: 0,
        description: '未付款'
    },
    {
        code: 1,
        description: '未发货'
    },
    {
        code: 2,
        description: '已发货'
    },
    {
        code: 3,
        description: '申请退货'
    },
    {
        code: 4,
        description: '退货完成'
    }
]

function findOrderStatusCode(description) {
    var code = '';
    orderStatus.forEach(function(value, index, array){
        if (value.description === description) {
            code = value.typeCode;
        }
    });
    return code;
}

// 初始化
layui.use(['form'], function() {
    var form = layui.form;
     
});

