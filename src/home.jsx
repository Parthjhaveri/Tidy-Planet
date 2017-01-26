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

            {
              // DIV #3
            }

            <div className="currentsolutions">

              <div className="container">
                <center>
                  <div className="row">
                    
                    <div className="col-md-6">
                      <center>
                        
                        <div className="blackcircle">

                              <center><p id="ateyate">88%</p></center>

                        </div>

                      </center>
                    </div>
                    
                    <div className="col-md-6" id="oceanpollutionrightbox">
                        
                        <p id="rightstat">Of the Earth's Oceans are now polluted with Plastic and Trash</p>

                        <center><hr id="rightstathr" /></center>

                        <p id="rightstatsub">8 Million Tons of Plastic are dumped in the Ocean every year- <a href="http://news.nationalgeographic.com/news/2015/02/150212-ocean-debris-plastic-garbage-patches-science/" target="_blank">NatGeo</a></p>

                    </div>

                  </div>
                </center>
              </div>
            </div>

            {
              // LAND POLLUTION
            }

             <div className="landpolldiv">
                <div className="container">
                  <center>
                    <div className="row">

                      <div className="col-md-6" id="whathappensleft">
                          <center><p className="leftbox">What happens to your trash once you dispose of it?</p></center>
                          <center><h1><span id="garbagearr" className="glyphicon glyphicon-arrow-right"></span></h1></center>
                      </div>
                      
                      <div className="col-md-6" id="whathappensright">
                          <p className="rightbox">Fifty-five percent gets buried in landfills, 33 percent gets recycled, and 12.5 percent goes to incinerators</p>
                          <br />
                          <p className="rightbox">If your trash goes to a landfill it will end up sealed in the ground, where some liquids leak into the ground</p>
                          <br />
                          <p className="rightbox">Landfills also release one-fourth of all methane; landfill and wastewater treatment gases made up 2.3 percent of U.S. greenhouse gas emissions in 2005</p>
                          <br />
                          <p className="rightbox">Burning trash also produces gases such as Nitrogen oxides and Sulfur-Dioxide (both cause smog and the latter causes Acid-Rain), as well as trace amounts of toxics such as mercury compounds and Dioxins</p>
                          <p id="natgeocredit"><em><a href="http://channel.nationalgeographic.com/channel/human-footprint/trash-talk.html" target="_blank">-NatGeo</a></em></p>
                      </div>
                      
                    </div>
                  </center>
                </div>
             </div>

          </div>

                 {
                  // OVER POPULATION DIV
                 }

                <div className="overpopdiv">
                  
                </div>


      </div>
    )
  }
})

export default Home;

