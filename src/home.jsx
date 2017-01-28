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
                            <center><h2>Global-Warming</h2></center>
                          </div>


                          <div className="statsdiv">
                            <p className="boxstats">
                            <strong>
                              
                              According to IPCC 2007 report, sea levels will rise by 7-23 inches by the end of this century due to global warming.
                              <br/>
                              <br />
                              <em><a href="http://www.conserve-energy-future.com/various-global-warming-facts.php" target="_blank" className="conservecredit"> -Conserve-Energy-Future</a></em>
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

      </div>

                  {
                    // BEACH PIC 
                  }
                  
                  <div className="beachpic">

                  </div>
 
                  {
                    // OVER POPULATION DIV
                  }

                  <div className="overpopdiv">
                      <div className="container">
                        <div className="row">
                          
                          <div className="col-md-6" id="leftoverpopbox">
                              <center><h1 className="overpopheading">Over-population</h1></center>
                              <center><h1><span className="glyphicon glyphicon-user"></span></h1></center>
                          </div>
                          
                          <div className="col-md-6" id="rightoverpopbox">
                              
                                <p> 
                                  According to records, the world population has already soared past 7 billion, and every second of the day, it is growing by 3 people.
                                  <br />
                                  <br />
                                  At the current rate, the population of the least-developed countries is expected to double in the next 31 years. 
                                </p>
                                <p id="natgeocredit"><em><a href="http://visionlaunch.com/6-dreadful-overpopulation-facts-and-statistics/" target="_blank">-VisionLaunch</a></em></p>
                              
                          </div>
                        </div>
                      </div>
                  </div>

                  {
                    // PLANS TO CLEAN UP
                  }
            </div>
                  <div className="sowhatplans">
                    <center><p>So how will we clean up this mess?</p></center>
                  </div>

                  {
                    // CURRENT SOLUTIONS
                  }

                   <div className="currentsols">
                        
                        <center>
                          <div className="container">
                            <div className="row">
                              
                              <div className="col-md-4">
                                Oceanic Pollution
                              </div>
                              
                              <div className="col-md-4">
                                Global-Warming
                              </div>
                              
                              <div className="col-md-4">
                                Over-population
                              </div>

                            </div>

                            <hr id="rowshr"/>

                            <div className="row">
                              
                                <div className="col-md-4">

                                  <div id="rowboxone">
                                      One of the most popular and feasible to extract plastics and other
                                      garbage out of the Ocean is proposed by a Start-up based in the
                                      Neatherlands- <a href="https://www.theoceancleanup.com/" target="_blank" id="cleanupref">The Ocean Cleanup</a>.
                                      <br />
                                      <br />
                                      The project is led by a 22-year old Entrepreneur from the Neatherlands, who's Team has drafted out plans
                                      that are able collect about 40% of garbage from the 'Great Pacific Trash Vortex'- an accumulation of trash approximately the size of 
                                      Texas in the heart of the Pacific Ocean, within 10 years.
                                      <br />
                                      <br />
                                      The project is in it's second phase, with full implimentation likely by the year 2020.
                                  </div>  
                                  
                                </div>
                                
                                <div className="col-md-4">
                                  
                                  <div id="rowboxtwo">
                                      Global-Warming is one of the greatest natural threats facing our planet today.
                                      <br />
                                      <br />
                                      However, a group of top scientists has just published a paper in Nature Climate Change robustly defending 
                                      the idea that, as they put it, “The observed rate of global surface warming since the turn of this century
                                      has been considerably less than the average simulated rate” produced by climate change models. (Derived from this
                                      <a href="https://www.washingtonpost.com/news/energy-environment/wp/2016/02/24/top-scientists-insist-global-warming-really-did-slow-down-in-the-2000s/?utm_term=.6e91f07745e1" target="_blank" id="cleanupref"> Washington Post </a>
                                      article).
                                      <br/>
                                      <br/>
                                      Some researchers suggest there is no concrete evidence of future increase in trends of Global-warming.
                                  </div>

                                </div>
                                
                                <div className="col-md-4">
                                   
                                   <div id="rowboxthree">
                                       Contrary reports actually show that our Global Population may actually start to decline in the coming years.
                                       It took the world longer to reach 7 Billion people than it took to reach 6 Billion, according to <a href="http://www.slate.com/articles/technology/future_tense/2013/01/world_population_may_actually_start_declining_not_exploding.html" target="_blank" id="cleanupref">Slate.</a>
                                       <br />
                                       <br />
                                       This is thanks to education of Girls in many developing countries like India, and some sub-Saharan 
                                       African Countries as well. 
                                       <br />
                                       <br />
                                       However, the current effects of over-population are having a major impact
                                       on our environment causing scarcity of many resources like food and clean water- but one of the little-known
                                       impacts of over-population cause Global-Warming... Smog being the culprit.
                                   </div> 

                                </div>

                            </div>

                          </div>
                        </center>

                  </div>

  </div>
    )
  }
})

export default Home;

