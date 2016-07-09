var React = require('react');
var ListItemInCart = require('./ListItemInCart');
var Cart = require('./Cart');
var Store = require('../stores/Store');
var Actions = require('../actions/Actions');

var CartContainer = React.createClass({
    getInitialState: function(){
        return {
            list: Store.getList(),
            cart: Store.getCart()
        }
    },
    componentDidMount: function(){
        Store.addChangeListener(this._onChange);
    },
    componentWillUnmount: function(){
        Store.removeChangeListener(this._onChange);
    },
    handleAddToCart: function(index){
        var item = this.state.list[index];
        Actions.addToCart(item);
    },
    handleRemoveFromCart: function(index){
        Actions.removeFromCart(index);
    },
    _onChange: function(){
        console.log("OK");
      this.setState({
        list: Store.getList(),
        cart: Store.getCart()
      })
    },
    render: function(){
        return(
            <div className = "row">
                <h1>List Item</h1>
                <ListItemInCart lists={this.state.list} addToCart={this.handleAddToCart} />
                <h1>Cart</h1>
                <Cart carts={this.state.cart}  removeFromCart={this.handleRemoveFromCart} />
            </div>
        )
    }
});
module.exports = CartContainer;
