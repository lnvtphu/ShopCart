var React = require('react');

var List = React.createClass({
  render: function(){
    var listItems = this.props.items.map(function(item, index){
      return (
        <li key={index} className="list-group-item listGroup" >
          <span
            className="glyphicon glyphicon-remove removeItem"
            onClick={this.props.removeItem.bind(null, index)}>
          </span>
          <span
            className="glyphicon glyphicon-edit editItem">
          </span>
          <span className="todoItem">
            {item.name}
            {item.cost}
          </span>
          <span
            className="glyphicon glyphicon-save addItem">
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

module.exports = List;
