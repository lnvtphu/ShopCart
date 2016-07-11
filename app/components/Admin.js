var React = require('react');
var AddItem = require('./AddItem');
var List = require('./ListItem');
var Store = require('../stores/Store');
var Actions = require('../actions/Actions');

var ListContainer = React.createClass({
    getInitialState: function(){
        return {
            sendItem: {},
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
    handleUpdateItem: function(item){
        Actions.updateItem(item);
    },
    _onChange: function(){
        this.setState({
            list: Store.getList()
        })
    },
    render: function(){
        return (
            <div className="col-sm-8 col-md-8 col-md-offset-2 col-sm-offset-2">
                <div className="col-sm-12 addBook">
                    <h2 className = "title">Add Book</h2>
                    <AddItem addItem={this.handleAddItem} updateItem={this.handleUpdateItem}/>
                    <List items={this.state.list} removeItem={this.handleRemoveItem}/>
                </div>
            </div>
        )
    }
});

module.exports = ListContainer;
