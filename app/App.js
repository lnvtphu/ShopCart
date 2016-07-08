var React = require('react');
var ListContainer = require('./components/ListContainer');
var CartContainer = require('./components/CartContainer');
var Link = require('react-router').Link;
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
var IndexRoute = require('react-router').IndexRoute;

var App = React.createClass({
  render: function(){
    return (
      <div className="container">
        <div className="row">
         <ul className="nav nav-tabs">
          <li role="presentation"><Link to = "/">Home</Link></li>
          <li role="presentation"> <Link to = "/cart">Cart</Link></li>
          <li role="presentation"><Link to = "/about">About</Link></li>
        </ul>
         <div>
           {this.props.children}
         </div>
        </div>
      </div>
    )
  }
});

React.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={ListContainer} />
            <Route path="cart" component={CartContainer} />
        </Route>
    </Router>
  ,document.getElementById('app')
)
