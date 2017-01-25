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

          <div className="container">

            <center>
                <div className="row">
                  
                  <div className="col-md-4">

                    <div className="box">
                      
                      <div className="boxhead">
                        <center><h2>Oceanic Pollution</h2></center>
                      </div>

                      <div className="statsdiv">
                        <p className="boxstats">
                        <strong>
                          The garbage dumped in the ocean every year is 
                          roughly around 14 billion lbs. 
                          <br/>
                          Plastic is the major constituent.
                          <br/>
                          <br />
                          <em><a href="http://www.conserve-energy-future.com/" target="_blank" className="conservecredit"> -Conserve-Energy-Future</a></em>
                        </strong>
                        </p>
                      </div>

                    </div>

                  </div>
                  
                  <div className="col-md-4">

                    <div className="box">
                      
                      <div className="boxhead">
                        <center><h2>Land Pollution</h2></center>
                      </div>


                      <div className="statsdiv">
                        <p className="boxstats">
                        <strong>
                          
                          Almost 80% of urban waste in India is dumped in the river Ganges.
                          <br/>
                          <br/>
                          <br />
                          <em><a href="http://www.conserve-energy-future.com/" target="_blank" className="conservecredit"> -Conserve-Energy-Future</a></em>
                        </strong>
                        </p>
                      </div>

                    </div>

                  </div>
                  
                  <div className="col-md-4">

                    <div className="box">
                      
                      <div className="boxhead">
                        <center><h2>Over-population</h2></center>
                      </div>

                      <div className="statsdiv">
                        <p className="boxstats">
                        <strong>
                          
                          By the end of the century, the world’s population might be as high as 17 billion 
                          or as low as 7 billion, according to the most recent UN estimates.
          
                        </strong>
                        </p>
                      </div>

                    </div>

                  </div>

                </div>
            </center>

          </div>

        </div>

      </div>
    )
  }
})

export default Home;

