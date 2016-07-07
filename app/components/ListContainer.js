var React = require('react');
var AddItem = require('./AddItem');
var List = require('./List');
var todoStore = require('../stores/todoStore');
var todoActions = require('../actions/todoActions');

var ListContainer = React.createClass({
  getInitialState: function(){
      return {
          list: todoStore.getList()
      }
  },
  componentDidMount: function(){
      todoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
      todoStore.removeChangeListener(this._onChange);
  },
  handleAddItem: function(newItem){
      todoActions.addItem(newItem);
  },
  handleRemoveItem: function(index){
      todoActions.removeItem(index);
  },
  handleAddToCart: function(item){
      todoActions.addToCart(item);
  },
  handleRemoveFromCart: function(index){
      todoActions.removeFromCart(index);
  }
  _onChange: function(){
    this.setState({
      list: todoStore.getList()
    })
  },
  render: function(){
    return (
      <div className="col-sm-6 col-md-offset-3">
        <div className="col-sm-12">
          <h3 className="text-center"> Add Item</h3>
          <AddItem addItem={this.handleAddItem}/>
          <List items={this.state.list} removeItem={this.handleRemoveItem}/>
        </div>
      </div>
    )
  }
});

module.exports = ListContainer;