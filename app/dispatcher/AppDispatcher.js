var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function(action){
  this.dispatch({
    source: 'SHOP_ACTION',
    action: action
  });
};

module.exports = AppDispatcher;
