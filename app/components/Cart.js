var React = require('react');

var Cart = React.createClass({
    render: function(){
        var list = this.props.carts.map(function(item, index){
            return (
                <li key={index} className="list-group-item listGroup" >
                    <span className="todoItem">
                        {item.count}
                        {item.name}
                        {item.cost}
                    </span>
                    <span
                        className="glyphicon glyphicon-remove removeItem buttonOren" onClick={this.props.removeFromCart.bind(null,index)} >
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
module.exports = Cart;
