var React = require('react');
var AddItem = require('./AddItem');
var List = require('./ListItem');
var Store = require('../stores/Store');
var Actions = require('../actions/Actions');

var ListContainer = React.createClass({
  getInitialState: function(){
      return {
          list: Store.getList()
      }
  },
  componentDidMount: function(){
      Store.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
      Store.removeChangeListener(this._onChange);
  },
  handleAddItem: function(item){
      Actions.addItem(item);
  },
  handleRemoveItem: function(index){
      Actions.removeItem(index);
  },
  _onChange: function(){
    this.setState({
      list: Store.getList()
    })
  },
  render: function(){
    return (
      <div className="col-sm-6 col-md-offset-3">
        <div className="col-sm-12">
          <h1 className="text-center">Add Book</h1>
          <AddItem addItem={this.handleAddItem}/>
          <List items={this.state.list} removeItem={this.handleRemoveItem}/>
        </div>
      </div>
    )
  }
});

module.exports = ListContainer;
