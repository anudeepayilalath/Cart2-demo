import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './Header.css';
import Pwoli from '../pwoli.gif';
import Facebook from '../facebook.png';
import Snapgif from '../hitting2.gif';
import Reddit from '../reddit.png';
import Instagram from '../instagram.png';
import Twitter from '../twitter.png';
import EspFlag from '../spain.png';
import Side1 from '../sides1.gif';
import Side2 from '../sides2.gif';
import SS from '../hori1.jpg';
import SS2 from '../hori2.jpg';
import Linea from '../linea.gif';
import Mypic from '../Untitled design (1).png';
import Giffy from '../yy3.gif';
import Mygif from '../source.gif';
import Man from '../man.gif';
import Man2 from '../man2.gif';
import Scroll from '../scrolling.jpg';
import Lineahori from '../lineahori.gif';
// import Giff2 from '../60203889.png';
import Htmlp from '../htmlp.webp';
import Jsp from '../jsp.gif';
import Np from '../np.webp';
import Rp from '../rp.webp';
import Pp from '../pp.png';
import Cssp from '../cssp.gif';
import Logo from '../logo.gif';
import Verti from '../verti.jpg';
import Req from '../req.png';
import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <div>
            
            <div className="navbar">

                <div className="dropdown">
                <li className="navys">Home</li>
                <div className="droppy">
                    <p>You are already here !!</p>
                </div>
                </div>
                
              <Link to="/about"> <li className="navys">About</li></Link> 
        
             <Link to="/"> <img src={Logo} className="logo" width="30px"></img></Link>
              
              
              <div className="dropdown">
              <Link to="/" className="linked"> <li className="navys">Projects</li></Link>
              <div className="droppy">
                  <p>Scroll Down ↓ Don't be lazy </p>
              </div>
              </div>
              
                <Link to="/second"><img className="langchange" src={EspFlag}></img></Link>
            </div>
            <div className="section1">
            
            <div className="imgdiv">
            
            <div className="topimgs">
            <img className="scary1" src={Side2}width="120px"></img>
            <img className="giffy" src={Giffy}  ></img>
            <img className="scary2"src={Side1} width="120px"></img>
            </div>
                
            

            


            <div className="title">
                <img src={Mypic} className="Mypic"></img>
            {/* <h1 className="myname"> <span className="Annu">ANUDEEP</span> AYILALATH PUTHALATH  <span className="p">
            <p>"I am an enthusiastic and hardworking front-end developer <br></br>committed to learning and developing creative solutions. 
                I consider the trust and satisfaction <br></br>from my superiors and colleagues to be the most valuable assets in my professional career."
            </p></span></h1> */}

            <div className="myname">
                <h1 className="Annu">
                <span className="surname">A</span>
                <span  className="surname">N</span>
                <span  className="surname">U</span>
                <span className="surname">D</span>
                <span className="surname">E</span>
                <span className="surname">E</span>
                
                <span className="surname">P</span>
                <span> A</span>
                <span>Y</span>
                <span>I</span>
                <span>L</span>
                <span>A</span>
                <span>L</span>
                <span>A</span>
                <span>T</span>
                <span>H</span>
                <span> P</span>
                <span>U</span>
                <span>T</span>
                <span>H</span>
                <span>A</span>
                <span>L</span>
                <span>A</span>
                <span>T</span>
                <span>H</span>
                </h1>
                <p className="p">"I am an enthusiastic and hardworking front-end developer committed to learning and developing creative solutions. 
                I consider the trust and satisfaction from my superiors and colleagues to be the most valuable assets in my professional career."</p>
            </div>

            <img className="mygif" width=" 200px"src={Mygif}></img>
            </div>
            <h1 className="expert">Areas Of Expertise<span>↓</span></h1>
            <div className="iconsdiv">
                <img src={Man} width="100px"></img>
                <div className="iconz">
                        <img src={Jsp} width="80px"></img>
                        <img src={Rp} width="80px"></img>
                        <img src={Np} width="80px"></img>
                        <img src={Htmlp} width="80px"></img>
                        <img src={Cssp} width="80px"></img>
                        <img src={Pp} width="80px"></img>
                 </div>
                 <img src={Man2} width="100px"></img>

            </div>
            </div>
            
            </div>

            
            <div className="belowpwoli">

             <h1>
               
                <span>N</span>
                <span>O</span>
                <span>T</span>
                <span>H</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
                <br></br>
                <span> T</span>
                <span>O</span>
                <span> S</span>
                <span>E</span>
                <span>E</span>
                <span> H</span>
                <span>E</span>
                <span>R</span>
                <span>E</span>
                <span> !!</span>
                <br></br>
                <span>🔧😅</span>
            </h1>


        
        </div>
                <div className="proheading">
                <h1>My Projects</h1>
                </div>
                <div className="mainproject">
                    <img className="linea" src={Linea} width="25px"></img>
                <div className="projects">
                    
                    <img src={Lineahori} className="lineahori" width="340px"></img>

                    <div className="pro2">
                        <div>
                         <a href="https://anudeepayilalath.github.io/TV-Series-Project/"> <img className="three" src={Verti}></img></a>
                          <h3>TV Series API</h3>
                        </div>
                                   
                    </div>
                    <div className="pro1">
                        <div>
                      <a href="https://anudeepayilalath.github.io/Weather-Forecast-using-API/"><img className="one"src={SS}width="10%" height="25%"></img></a> 
                        <h3>Weather API</h3>
                            </div>
                       
                        <div>
                      <a href="https://psicologxs-de-calle.netlify.app/"> <img className="two"src={SS2} width="10%" height="25%"></img></a> 
                        <h3>N G O</h3>
                        </div>
                    </div>

                   

                    <div className="proreq">
                        <div>
                         <a href="http://hrup.namli.pw/login"> <img className="req" src={Req}></img></a>
                          <h3>HrUp Request Holidays</h3>
                        </div> 
                    </div>
                    <img src={Lineahori} className="lineahori" width="340px"></img>
                </div>
                <img src={Linea} className="linea" width="25px"></img>
                </div>
               


                <div className="livewall">
                    <img className="mario" src={Scroll}></img>
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

export default Header;