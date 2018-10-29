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

// 初始化
layui.use(['form'], function() {
    var form = layui.form;
    function initSearchBookTypeSelect() {
        var selectType = $('#searchBookType');
        bookTypes.forEach(function(value, index, array){
            var option = $("<option>").val(value.typeCode).text(value.description);
            selectType.append(option);
            });
        form.render('select', 'searchBookForm');
    }
    
    initSearchBookTypeSelect();    
});

