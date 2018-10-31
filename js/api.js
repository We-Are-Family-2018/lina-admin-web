var apiBasePath = 'http://localhost:8080'

var bookTypeSet = [
    '哲学'
    ,'文学'
    ,'经管'
    ,'人文'
    ,'计算机'
    ,'科技'
]

// API模板
var apiTemplate = {
    basePath: apiBasePath
    ,path: "/index.html"
    ,call: function (query, sucBackCall) {
        var url = this.basePath ? this.basePath + this.path : this.path;
        var suc = sucBackCall ? sucBackCall : function(){};
        $.get(this.fullPath, query, function(data, status) {
            // console.log(data);
            if (status == 'success' || success == 'notmodified') {
                suc(data);
            } else {
                _onFail(data, status);
            }
        });
        this._onDone(query);
    }
    ,onFail: function(func) {this._onFail = func; return this;}
    ,_onFail: function(data, status){}
    ,onDone: function(func) {this._onDone = func; return this;}
    ,_onDone: function(bookInfo){}
}

var deleteBookApi = {
    basePath: apiBasePath
    ,path: "/deleteBook"
    ,fullPath: this.basePath + this.path
    ,call: function (bookId) {
        $.post(this.fullPath, function(data) {
            console.log(data);
        })
    }
}

var editBookApi = {
    basePath: apiBasePath
    ,path: "/editBook"
    ,fullPath: this.basePath + this.path
    ,call: function (bookInfo) {
        $.post(this.fullPath, function(data) {
            console.log(data);
        })
    }
}

var apiUrl = {
    // 书籍搜索，该API与layui紧耦合，只能指定路径
    // 可能会有的参数：
    //  bookType：图书类型（int）
    //  bookName：图书名字（String）
    //  page：第几页
    //  limit：一页多少条数据
    // 要求的响应的数据结构：
    //  {
    // 	    "code": 0,
    // 	    "msg": "",
    // 	    "count": 1000,
    // 	    "data": [{}]
    //  }
    //  code：0为正常
    //  msg：发生异常时提示用的消息
    //  count：数据总数量（用于表格分页）
    //  data：结果数据集
    // searchBook: 'data/book.json'
    searchBook: 'http://localhost:8080/managerWeb/searchBook'
    ,imgUpload: 'http://localhost:8080/managerWeb/uploadBookImg'
    ,updateBook: 'http://localhost:8080/managerWeb/updateBook'
    ,addBook: 'http://localhost:8080/managerWeb/addBook'
    ,deleteBook: 'http://localhost:8080/managerWeb/deleteBook'
    ,searchOrder: 'http://localhost:8080/managerWeb/searchOrder'
    ,updateOrder: ''
}