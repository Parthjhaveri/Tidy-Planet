// THIS IS WHERE WE WILL IMPORT EVERYTHING ----------------------------------------------------------------------------------
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import CSS from './App.css';
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';

// THE HOME COMPONENT
var Home = React.createClass({
  render: function() {
    return (
      <div className="homePageSplasher">  

        <center><p id="mainheading">Tidy Planet</p></center>
        
      </div>
    )
  }
})

export default Home;

