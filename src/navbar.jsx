// THIS IS WHERE WE WILL IMPORT EVERYTHING ----------------------------------------------------------------------------------
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import CSS from './App.css';
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';

// THE HOME COMPONENT
var Navbar = React.createClass({
  render: function() {
    return (
      <div className="navi navbar-fixed-top">  

      	<div className="row">

		  <div className="col-md-4">
		  	<span className="glyphicon glyphicon-globe" id="logo"></span>
		  </div>

		  <div className="col-md-8">
		  	<span className="glyphicon glyphicon-menu-hamburger" id="ham"></span>
		  </div>

		</div>

      </div>
    )
  }
})

export default Navbar;

