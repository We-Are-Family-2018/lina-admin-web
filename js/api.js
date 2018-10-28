var apiBasePath = 'http://localhost:10001/data/addBook'

var BookType = {
    Literature: {
        typeCode: 1,
        description: '文学'
    }
}

var bookTypeSet = [
    '哲学'
    ,'文学'
    ,'经管'
    ,'人文'
    ,'计算机'
    ,'科技'
]

var addBookApi = {
    basePath: apiBasePath,
    path: "/addBook",
    fullPath: this.basePath + this.path,
    call: function (bookInfo, sucBackCall) {
        $.post(this.fullPath, function(data) {
            console.log(data);
        })
    }
}

var deleteBookApi = {
    basePath: apiBasePath,
    path: "/deleteBook",
    fullPath: this.basePath + this.path,
    call: function (bookId) {
        $.post(this.fullPath, function(data) {
            console.log(data);
        })
    }
}

var editBookApi = {
    basePath: apiBasePath,
    path: "/editBook",
    fullPath: this.basePath + this.path,
    call: function (bookInfo) {
        $.post(this.fullPath, function(data) {
            console.log(data);
        })
    }
}

var selectAllBookApi = {
    basePath: apiBasePath,
    path: "/selectAllBook",
    fullPath: this.basePath + this.path,
    call: function (bookType) {
        $.post(this.fullPath, function(data) {
            console.log(data);
        })
    }
}