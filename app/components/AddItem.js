var React = require('react');
var Check = require('../checktv4/Check');
var LinkState = require('react-link-state');

var AddItem = React.createClass({
    getInitialState: function(){
        return {
            id : "",
            name : "",
            content : "",
            cost : ""
        }
    },
    getFormData: function(){
        this.refs.idItem.getDOMNode().value = '';
        this.refs.nameItem.getDOMNode().value = '';
        this.refs.costItem.getDOMNode().value = '';
        this.refs.contentItem.getDOMNode().value = '';
        var item = {
            "id": this.state.id,
            "name": this.state.name,
            "content": this.state.content,
            "cost": parseInt(this.state.cost),
            "image": "http://teacherlearningsessions.com/wp-content/uploads/2016/02/BOOKLOVELOGOv2020416.png"
        };
        if(item.name == "" || item.costTemp == "" || item.id == ""  || item.content == ""){
            alert("Input null");
        }else{
            if(Check.checkObject(item).type == false){
                alert(Check.checkObject(item).content);
            }else {
                return item;
            }
        }
    },
    handleSubmitAdd: function(){
        this.props.addItem(this.getFormData());
        console.log("add");
    },
    handleSubmitUpdate: function(){
        this.props.updateItem(this.getFormData());
        console.log("update");
    },
    render: function(){
        return (
            <div>
                <div className = "row col-sm-12 col-md-12 rowAddItem">
                    <label className = "col-sm-2 col-md-2 col-sm-offset-1 col-md-offset-1">ID:</label>
                    <input type="text" ref="idItem" className="form-control col-sm-8 col-md-8" placeholder="ID of item"
                    //disabled={checkUpdate}
                    valueLink={LinkState(this, 'id')}
                    />
                </div>
                <div className = "row col-sm-12 col-md-12 rowAddItem">
                    <label className = "col-sm-2 col-md-2 col-sm-offset-1 col-md-offset-1">Name:</label>
                    <input type="text" ref="nameItem" className="form-control col-sm-8 col-md-8" placeholder="Name of item"
                    valueLink={LinkState(this, 'name')}
                    />
                </div>
                <div className = "row col-sm-12 col-md-12 rowAddItem">
                    <label className = "col-sm-2 col-md-2 col-sm-offset-1 col-md-offset-1">Content</label>
                    <textarea rows="7" type="text" ref="contentItem" className="form-control col-sm-8 col-md-8" placeholder="Content of item"
                    valueLink={LinkState(this, 'content')}
                    />
                </div>
                <div className = "row col-sm-12 col-md-12 rowAddItem">
                    <label className = "col-sm-2 col-md-2 col-sm-offset-1 col-md-offset-1">Pice:</label>
                    <input type="text" ref="costItem" className="form-control col-sm-8 col-md-8" placeholder="Cost of item"
                    valueLink={LinkState(this, 'cost')}
                    />
                </div>
                <div className = "row col-sm-12 col-md-12 rowAddItem">
                    <div className = "col-sm-8 col-md-8 col-md-offset-3 col-sm-offset-3">
                        <button className="button col-sm-4 col-md-4 col-md-offset-4 col-sm-offset-4 submit" onClick={this.handleSubmitAdd}>Add Item</button>
                        <button className="button col-sm-4 col-md-4 col-md-offset-4 col-sm-offset-4 submit" onClick={this.handleSubmitUpdate}>Update Item</button>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = AddItem;
