import React from 'react';
import './Header.css';
import Pwoli from '../pwoli.gif';
import Facebook from '../facebook.png';
import Reddit from '../reddit.png';
import Instagram from '../instagram.png';
import Twitter from '../twitter.png';

import Mypic from '../Untitled design (1).png';
import Giffy from '../yy3.gif';
import Mygif from '../source.gif';
import Man from '../man.gif';
import Man2 from '../man2.gif';
import Scroll from '../scrolling.jpg';
// import Giff2 from '../60203889.png';
import Htmlp from '../htmlp.webp';
import Jsp from '../jsp.gif';
import Np from '../np.webp';
import Rp from '../rp.webp';
import Pp from '../pp.png';
import Cssp from '../cssp.gif';
import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <div>
            
            <div className="section1">
            <div>
                <Link to="/second"><img className="langchange" src="https://cdn.countryflags.com/thumbs/spain/flag-400.png"></img></Link>
            </div>
            <div className="imgdiv">
            
                <img className="giffy" src={Giffy}  ></img>
            

            


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
                <p className="p">"I am an enthusiastic and hardworking front-end developer <br></br>committed to learning and developing creative solutions. 
                I consider the trust and satisfaction <br></br>from my superiors and colleagues to be the most valuable assets in my professional career."</p>
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
               
                <span> N</span>
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
                <span>!!</span>
                <br></br>
                <span>😅</span>
            </h1>

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