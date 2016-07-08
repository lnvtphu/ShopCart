var React = require('react');

var ListItem = React.createClass({
    render: function(){
        var listItems = this.props.items.map(function(item, index){
            return (
                <li key={index} className="list-group-item listGroup" >
                <span className="todoItem">
                    {item.name}
                    {item.cost}
                </span>
                <span
                  className="glyphicon glyphicon-remove removeItem buttonOren" onClick={this.props.removeItem.bind(null, index)}>
                </span>
                <span
                    className="glyphicon glyphicon-edit editItem buttonOren">
                </span>
            </li>
        )
    }.bind(this));
    return (
        <ul className="uList">
            {listItems}
        </ul>
        )
    }
});

module.exports = ListItem;
