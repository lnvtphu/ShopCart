var React = require('react');
var Store = require('../stores/Store');
var Actions = require('../actions/Actions');

var ListItemInCart = React.createClass({
    render: function(){
        var list = this.props.lists.map(function(item, index){
            return (
                <li key={index} className="list-group-item listGroup" >
                    <span className="todoItem">
                        {item.name}
                        {item.cost}
                    </span>
                    <span
                        className="glyphicon glyphicon-download-alt addItem buttonOren" onClick={this.props.addToCart.bind(null, index)}>
                    </span>
                </li>
            )
        }.bind(this));
        return (
            <ul className="uList">
                {list}
            </ul>
        )
    }
});

module.exports = ListItemInCart;
