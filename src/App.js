// THIS IS WHERE WE WILL IMPORT EVERYTHING ----------------------------------------------------------------------------------
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';
import CSS from './App.css';
import Home from './home.jsx'


// THE PARENT COMPONENT
var App = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})

// THIS IS WHERE WE WILL RENDER EVERYTHING-----------------------------------------------------------------------------------
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      	<Route path='/home' component={Home} />
    </Route>
  </Router>,
  document.getElementById('root')
);