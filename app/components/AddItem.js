var React = require('react');

var AddItem = React.createClass({
  handleSubmit: function(e){
      var id = this.refs.idItem.getDOMNode().value;
      var name = this.refs.nameItem.getDOMNode().value;
      var cost = this.refs.costItem.getDOMNode().value;
      if(name && cost && id){
          this.refs.idItem.getDOMNode().value = '';
          this.refs.nameItem.getDOMNode().value = '';
          this.refs.costItem.getDOMNode().value = '';
          var item = {
              "id": id,
              "name": name,
              "cost": cost
          }
          this.props.addItem(item);
      }else{
          alert("null");
      }


  },
  render: function(){
    return (
      <div>
        <input type="text" ref="idItem" className="form-control" placeholder="ID of item" />
        <input type="text" ref="nameItem" className="form-control" placeholder="Name of item" />
        <input type="text" ref="costItem" className="form-control" placeholder="Cost of item" />
        <button className="button" onClick={this.handleSubmit}>Add Item</button>
      </div>
    )
  }
});

module.exports = AddItem;
