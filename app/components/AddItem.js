var React = require('react');
var Check = require('../checktv4/Check');

var AddItem = React.createClass({
    handleSubmit: function(e){
        var id = this.refs.idItem.getDOMNode().value;
        var name = this.refs.nameItem.getDOMNode().value;
        var content = this.refs.contentItem.getDOMNode().value;
        var costTemp = this.refs.costItem.getDOMNode().value;
        var cost = parseInt(costTemp);
        if(name && costTemp && id && content){
            this.refs.idItem.getDOMNode().value = '';
            this.refs.nameItem.getDOMNode().value = '';
            this.refs.costItem.getDOMNode().value = '';
            this.refs.contentItem.getDOMNode().value = '';
            var item = {
                "id": id,
                "name": name,
                "content": content,
                "cost": cost
            }
            // console.log(Check.checkObject(item));
            if(Check.checkObject(item).type == false){
                alert(Check.checkObject(item).content);
            }else {
                this.props.addItem(item);
            }
        }else{
            alert("null");
        }
    },
    render: function(){
        return (
            <div>
                <div className = "row col-sm-12 col-md-12 rowAddItem">
                    <label className = "col-sm-4 col-md-4">ID:</label>
                    <input type="text" ref="idItem" className="form-control col-sm-8 col-md-8" placeholder="ID of item" />
                </div>
                <div className = "row col-sm-12 col-md-12 rowAddItem">
                    <label className = "col-sm-4 col-md-4">Name:</label>
                    <input type="text" ref="nameItem" className="form-control col-sm-8 col-md-8" placeholder="Name of item" />
                </div>
                <div className = "row col-sm-12 col-md-12 rowAddItem">
                    <label className = "col-sm-4 col-md-4">Content</label>
                    <textarea rows="7" type="text" ref="contentItem" className="form-control col-sm-8 col-md-8" placeholder="Content of item" />
                </div>
                <div className = "row col-sm-12 col-md-12 rowAddItem">
                    <label className = "col-sm-4 col-md-4">Pice:</label>
                    <input type="text" ref="costItem" className="form-control col-sm-8 col-md-8" placeholder="Cost of item" />
                </div>
                <div className = "row col-sm-12 col-md-12 rowAddItem">
                    <button className="button col-sm-8 col-md-8 col-md-offset-4 col-sm-offset-4" onClick={this.handleSubmit}>Add Item</button>
                </div>

            </div>
        )
    }
});

module.exports = AddItem;
