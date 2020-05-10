var orm = require("../config/orm.js")

// code that will call ORM functions using a specific input

var burger = {
    selectall: function (cb){
        orm.selectall("burger", function (res){
            cb(res);
        });
    };
};