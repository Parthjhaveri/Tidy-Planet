// THIS IS WHERE WE WILL IMPORT EVERYTHING ----------------------------------------------------------------------------------
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import CSS from './App.css';
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';
import Navbar from './navbar.jsx';

// THE HOME COMPONENT
var Home = React.createClass({
  render: function() {
    return (
      <div>

        <div className="homePageSplasher">  

          <center><p id="mainheading">Tidy Planet</p></center>
          <hr id="headinghr" />
          <center><p id="subheading"><em><strong>A <strong>mission</strong> to highlight the environmental issues pressing our Planet</strong></em></p></center>
          
          <center><span className="glyphicon glyphicon-menu-down" id="spasherarrow"></span></center>

        </div>

        <div className="maininfo">
        </div>

      </div>
    )
  }
})

export default Home;

