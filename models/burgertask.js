var orm = require("../config/orm.js")

// Code that will call ORM functions using a specific input
var burger = {
    selectall: function (cb){
        orm.selectall("burgers", function (res){
            cb(res);
        });
    };
};
 function("addnew") (cols, vals, cb) {
    orm.addNew("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
 function("update")(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
 function("delete") (condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
   }
};
//export connection for the Controller
  module.exports = burgers;