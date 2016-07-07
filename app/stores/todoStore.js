var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var store = {
    listItem: []
};
var cart = {
    listCart: []
}
var addItem = function(item){
    store.listItem.push(item);
};

var removeItem = function(index){
    store.listItem.splice(index, 1);
};
var addCart = function(item){
    cart.listCart.push(item);
};
var removeFromCart = function(index){
    cart.listCart.splice(index,1);
}
var todoStore = objectAssign({}, EventEmitter.prototype, {
    addChangeListener: function(cb){
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener: function(cb){
        this.removeListener(CHANGE_EVENT, cb);
    },
    getList: function(){
        return store.listItem;
    },
});

AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType){
        case appConstants.ADD_ITEM:
            addItem(action.data);
            todoStore.emit(CHANGE_EVENT);
            break;
        case appConstants.REMOVE_ITEM:
            removeItem(action.data);
            todoStore.emit(CHANGE_EVENT);
            break;
        case appConstants.ADD_TO_CART:
            addCart(action.data);
            todoStore.emit(CHANGE_EVENT);
            break;
        case appConstants.REMOVE_FROM_CART:
            removeFromCart(action.data);
            todoStore.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }
});

module.exports = todoStore;
