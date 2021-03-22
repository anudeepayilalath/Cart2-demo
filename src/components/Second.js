import React from 'react';
import './Header.css';
import Pwoli from '../pwoli.gif';
import Scroll from '../scrolling.jpg'
import Facebook from '../facebook.png';
import Reddit from '../reddit.png';
import Instagram from '../instagram.png';
import Twitter from '../twitter.png';
import Mypic from '../Untitled design (1).png';
import Giffy from '../yy3.gif';
import Mygif from '../source.gif';
import Man from '../man.gif';
import Man2 from '../man2.gif';
// import Giff2 from '../60203889.png';
import Htmlp from '../htmlp.webp';
import Side1 from '../sides1.gif';
import Side2 from '../sides2.gif';
import Jsp from '../jsp.gif';
import Np from '../np.webp';
import Rp from '../rp.webp';
import Pp from '../pp.png';
import Cssp from '../cssp.gif';
import UsFlag from '../usflag.png';
import Logo from '../logo.gif';
import SS from '../hori1.jpg';
import SS2 from '../hori2.jpg';
import Verti from '../verti.jpg';
import Req from '../req.png';
import {Link} from 'react-router-dom';


const Second = () =>{
    return(
        <div>

            <div className="navbar">
               <div className="dropdown">
               <li className="navys">Inicio</li>
               <div className="droppy">
                   <p>Ya estas aqui !!</p>
               </div>
               </div>
                
               <Link to="/sobremi"> <li className="navys">SobreMí</li></Link>
                <img src={Logo} className="logo" width="30px"></img>
               <div className="dropdown">
               <li className="navys">Proyectos</li>
               <div className="droppy">
                   <p>Desplazarse hacia abajo ↓ No seas perezoso</p>
               </div>
               </div>
              
                <Link to="/"><img className="langchange" src={UsFlag}></img></Link>
            </div>

            
            <div className="imgdiv">
            
            <div className="topimgs">
            <img className="scary1" src={Side1}width="150px"></img>
            <img className="giffy" src={Giffy}  ></img>
            <img className="scary2"src={Side2} width="150px"></img>
            </div>
            
            <div className="title">
                <img src={Mypic} className="Mypic"></img>
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
                <p className="p">"Soy un desarrollador front-end entusiasta y trabajador
comprometidos con el aprendizaje<br></br> y el desarrollo de soluciones creativas.
Considero la confianza y la satisfacción de mis<br></br> superiores y colegas para
ser el activo más valioso de mi carrera profesional. "</p>
            </div>
            <img className="mygif" width=" 200px"src={Mygif}></img>
            </div>
            <h1 className="expert">Áreas de Especialización<span>↓</span></h1>
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

           
            <div className="belowpwoli">

<h1>
  
   <span> N</span>
   <span>A</span>
   <span>D</span>
   <span>A</span>
   <span> Q</span>
   <span>U</span>
   <span>E</span>
   <br></br>
   <span> V</span>
   <span>E</span>
   <span>R</span>
   
   <span> A</span>
   <span>Q</span>
   <span>U</span>
   <span>I</span>
   <span> !!</span>
  
   <br></br>
   <span>😅</span>
</h1>

</div>



<div className="projects">
                    <h1>Mis Proyectos</h1>
                    <div className="pro2">
                        <div>
                         <a href="https://anudeepayilalath.github.io/TV-Series-Project/"> <img className="three" src={Verti}></img></a>
                          <h3>Series de Tele API</h3>
                        </div>
    
                    </div>
                    <div className="pro1">
                        <div>
                      <a href="https://anudeepayilalath.github.io/Weather-Forecast-using-API/"><img className="one"src={SS}width="10%" height="25%"></img></a> 
                        <h3>Clima API</h3>
                            </div>
                       
                        <div>
                      <a href="https://psicologxs-de-calle.netlify.app/"> <img className="two"src={SS2} width="10%" height="25%"></img></a> 
                        <h3>ONG (Demo)</h3>
                        </div>
                    </div>
                    

                    <div className="proreq">
                        <div>
                         <a href="http://hrup.namli.pw/login"> <img className="req" src={Req}></img></a>
                          <h3>Para Solicitar Vacaciones</h3>
                        </div> 
                    </div>
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
                   <p className="createdby">Creado Por Anudeep Ayilalath Puthalath</p>
               </div>
           </div>
           </div>
            
        </div>
    )
}

export default Second;