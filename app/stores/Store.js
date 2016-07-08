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
var addToCart = function(item){
    var itemCart = {
        "id": item.id,
        "name": item.name,
        "cost": item.cost,
        "count": 1
    }
    if(cart.listCart.length > 0){
        for(i=0; i< cart.listCart.length; i++){
            if(item.id == cart.listCart[i].id){
                console.log("equal");
                itemCart.count = cart.listCart[i].count +1;
                cart.listCart.splice(i, 1, itemCart);
            }else {
                cart.listCart.push(itemCart);
                console.log("not equal");
            }
        }
    }else {
        console.log("first");
        cart.listCart.push(itemCart);
    }
};
var removeFromCart = function(index){
    cart.listCart.splice(index,1);
}
var Store = objectAssign({}, EventEmitter.prototype, {
    addChangeListener: function(cb){
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener: function(cb){
        this.removeListener(CHANGE_EVENT, cb);
    },
    getList: function(){
        return store.listItem;
    },
    getCart: function(){
        return cart.listCart;
    }
});

AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType){
        case appConstants.ADD_ITEM:
            addItem(action.data);
            Store.emit(CHANGE_EVENT);``
            break;
        case appConstants.REMOVE_ITEM:
            removeItem(action.data);
            Store.emit(CHANGE_EVENT);
            break;
        case appConstants.ADD_TO_CART:
            addToCart(action.data);
            Store.emit(CHANGE_EVENT);
            break;
        case appConstants.REMOVE_FROM_CART:
            removeFromCart(action.data);
            Store.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }
});

module.exports = Store;

 // state.users.splice(this.state.indexUser, 1, this.state.templeUser);
