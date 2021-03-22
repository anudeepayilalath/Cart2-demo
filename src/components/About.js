import React from 'react';
import './About.css';
import Pwoli from '../pwoli.gif';
import Facebook from '../facebook.png';
import Reddit from '../reddit.png';
import Instagram from '../instagram.png';
import Twitter from '../twitter.png';
import EspFlag from '../spain.png';
import Side1 from '../sides1.gif';
import Side2 from '../sides2.gif';
import SS from '../hori1.jpg';
import SS2 from '../hori2.jpg';

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
import Logo from '../logo.gif'
import Verti from '../verti.jpg'
import Liney from '../liney.gif';
import {Link} from 'react-router-dom';

const About = () =>{
    return(
        <div>
            <div className="navbar">
             <Link to="/">  <li className="navys">Home</li></Link> 
              <div className="dropdown">
                <li className="navys">About</li>
                <div className="droppy">
                    <p>You are already here !!</p>
                </div>    
              </div>  
                <Link to="/"> <img src={Logo} className="logo" width="30px"></img></Link>


                <div className="dropdown">
                <li className="navys">Projects</li>
                <div className="droppy">
                    <p>Go to Home !!</p>
                </div>
                </div>
               
                <Link to="/sobremi"><img className="langchange" src={EspFlag}></img></Link>
            </div>
            
            
            <div className="imgdiv">
            
                
            

            


            <div className="titulo">
                <div className="titulo2">
                <img src={Side1} width="190px" className="ghosty"></img>
                <img src={Mypic} className="Mypic"></img>
                <img src={Side2} width="190px" className="ghosty"></img>
                </div>
               
            {/* <h1 className="myname"> <span className="Annu">ANUDEEP</span> AYILALATH PUTHALATH  <span className="p">
            <p>"I am an enthusiastic and hardworking front-end developer <br></br>committed to learning and developing creative solutions. 
                I consider the trust and satisfaction <br></br>from my superiors and colleagues to be the most valuable assets in my professional career."
            </p></span></h1> */}
        <div className="">
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
                <p className="p2"> I consider programming as something I am really passionate about which I didn’t discover until I started learning programming about two years ago. I consider programming to be a hard job, but it’s something I really enjoy as I love solving problems and finding resourceful solutions. It makes me feel like programming is the unique hidden talent I possess, like the saying that “Every person has a hidden talent”. I consider myself to be a hardworking person, because I am committed to finishing projects in a timely manner and work on them to the best of my abilities. Apart from programming, I love video editing which is the second talent I posses, in which I have created a lot of videos with various visual effects.</p>
                <img src={Liney} className="liney" width="150px"></img>
            </div>

            
            

          
          </div>
          
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

</div>
    )
}

export default About;