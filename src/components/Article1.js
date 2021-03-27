import React from 'react';
import {Link} from 'react-router-dom';
import './Article1.css';
import Logo from '../logo.gif';
import EspFlag from '../spain.png';
import Pwoli from '../pwoli.gif';
import Facebook from '../facebook.png';
import Snapgif from '../hitting2.gif';
import Reddit from '../reddit.png';
import Instagram from '../instagram.png';
import Twitter from '../twitter.png';
import Mypic from '../Untitled design (1).png';
import Curvyline from '../curvyline.png';
import Noname from '../unnamed.jpg';
import { HashLink } from 'react-router-hash-link';


const Article1 = () =>{
    return (
        <div>
            <div className="navbar" id="navbar">
            <Link to="/" > <img src={Logo} className="logo" width="30px"></img></Link>
            
            <Link to="/" style={{textDecoration:"none"}}><li className="navys">Home</li></Link>
            
            <HashLink smooth to='/#belowpwoli' style={{ textDecoration: 'none' }}><li className="navys">Blog</li></HashLink>   
              
            
            <HashLink smooth to='/#projects' style={{textDecoration:"none"}}><li className="navys">Projects</li></HashLink>
            
            
          
            <Link to="/about"  style={{ textDecoration: 'none' }}> <li className="navys">About</li></Link> 
            <div className="dropdown">
            <img className="langchange" style={{cursor:"pointer"}}src={EspFlag}></img>
            <div className="droppy">
                <p>En Desarrollo</p>
            </div>
            </div>
            </div>
                        
            <div className="blogpost">
                <div id="headingandimg">
                    <div>
                     <img src={Noname} width="450px"></img>
                     <p style={{fontSize:"10px"}}>Image from Goolge Images</p>
                     </div>
                    <p>Published on March, 2021</p>
                </div>
               
                <div id="headingandpara">
                <h1 style={{textAlign:"center"}}>Why We Should Take Climate Change Seriously </h1>
                <p><span style={{color:"white"}}>"</span> Climate change is the greatest threat to our existence in our short history <br></br>on this planet. Nobody’s going to buy their way out of its effects. <span style={{color:"white"}}>"</span></p>
               <p style={{fontSize:"18px"}}>It is good news that debate over climate change is moving from arguments over the science to arguments over policy. But don't expect the policy arguments to be any less intense. One important point of contention is the proper role of adaptation to climate impacts in climate policy, which to date has received far too little attention as compared to the attention paid to energy policies, called climate mitigation.
The first thing to recognize about climate policy is that any successful efforts to reduce carbon dioxide emissions today will not have a perceptible impact on the climate for many decades. This of course does not mean that we need not concern ourselves with reducing emissions. To the contrary, it means that to succeed politically and economically we have to develop creative strategies that connect shorter terms benefits of emissions reductions with those benefits expected in the more distant future. </p>
                    <p style={{fontSize:"18px"}}>But what should be unavoidably obvious about the delay between any reduction in emissions and their corresponding effects on climate is that the only policies that can have a perceptible effect on the impacts of climate are necessarily adaptive in nature.

Consider the case of hurricanes. While research continues into the exact role of human-caused climate change in recent hurricane activity, let's simply assume that greenhouse gas emissions have led to an increase in hurricane intensities and will continue to do so into the future. What effect would mitigation of greenhouse gases have on future global economic losses? Depending on various assumptions for growth in population and the economy, exact changes
 in hurricane intensity, and the relation between intensity and damage it turns out that adaptation in the form of, for example, improved building codes and construction, is between 10 and 25 times more effective than would be the effects of a fully-successful Kyoto Protocol. And under every emissions reduction scenario, even a magic instant curtailment of 
 global emissions, adaptation is a by far the more effective approach to future hurricane damage across assumptions.</p>
               
                

                <p style={{fontSize:"18px"}}>Does this mean that the Kyoto Protocol is in general a bad idea? Of course not. What it does mean however is that with respect to future hurricane impacts, adaptation should be the focal point of discussions related to climate policy. The reality is that hurricanes are discussed far more in terms of justifications for changes in energy policies, which is misleading at best. Similar results have been found for the important role of adaptation with respect to future impacts of floods, tornadoes, and other extreme events.

Given knowledge of the significant benefits of adaptive responses one of the great puzzles of the debate over climate change is how people who express great concern about the plight of future generations expected to experience the impacts of changes in climate can be simultaneously apparently so callus about those who suffer climate impacts in today's generation. Images of poor people suffering in the aftermath of Hurricane Katrina are more often used to justify
 changes in energy policies than to recommend those adaptive actions that might have an appreciable impact on the lives of those who suffer the effects of today's disasters.</p>

 <img src={Curvyline} width="300px"></img>
                </div>

                <div className="more">
            <h1>More blogs</h1>
            
            <div className="moreblogs">
                <p>Coming soon..</p>
            </div>
            </div>

           <HashLink smooth to='/#belowpwoli' style={{textDecoration:"none"}}>
           <div className="bblog">
                <div>
                    BLOG
                </div>
            </div>
           </HashLink>
           
           
            </div>
            
            <div className="footer">
               <img src={Pwoli} className="pwoli" width="120px"></img>
               <div className="forrow">
               <div className="sicons">
                  <a href="https://www.facebook.com/"> <img src={Facebook}width="30px"></img></a>
                   <p>Facebook</p>
                  <a href="https://www.instagram.com/"> <img src={Instagram} width="30px"></img></a>
                   <p>Instagram</p>
                  <a href="https://twitter.com/"> <img src={Twitter}width="30px"></img></a>
                   <p>Twitter</p>
                   <a href="https://www.reddit.com/"><img src={Reddit} width="30px"></img></a>
                   <p>Reddit</p>
                   
               </div>
               <div>
                   <img src={Mypic} className="bottompic"width="100px"></img>
                   <p className="createdby">Created by Anudeep Ayilalath Puthalath</p>
               </div>
           </div>
           </div>


        </div>
    )
}

export default Article1;