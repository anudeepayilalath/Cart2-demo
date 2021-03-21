import React from 'react';
import './Sobremi.css';
import Pwoli from '../pwoli.gif';
import Facebook from '../facebook.png';
import Reddit from '../reddit.png';
import Instagram from '../instagram.png';
import Twitter from '../twitter.png';
import UsFlag from '../usflag.png';

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

const Sobremi = () =>{
    return(
        <div>
            <div className="navbar">
             <Link to="/second">  <li className="navys">Inicia</li></Link> 
              <div className="dropdown">
              <li className="navys">SobreMi</li>
              <div className="droppy">
                  <p>Ya estas aqui !!</p>
              </div>
              </div>
               
                <Link to="/second"> <img src={Logo} className="logo" width="30px"></img></Link>
               <div className="dropdown">
               <li className="navys">Proyectos</li> 
               <div className="droppy">
                   <p>Ir a Inicio !!</p>
               </div>
               </div>
              
                <Link to="/about"><img className="langchange" src={UsFlag}></img></Link>
            </div>
            
            
            <div className="imgdiv">
            
                
            

            


            <div className="titulo">
                <img src={Mypic} className="Mypic"></img>
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
                <p className="p">"Soy un desarrollador front-end entusiasta y trabajador comprometidos con el aprendizaje
y el desarrollo de soluciones creativas.<br></br> Considero la confianza y la satisfacción de mis
superiores y colegas para ser el activo más valioso de mi carrera profesional. "</p>
                <p className="p2"> Considero la programación como algo que realmente me apasiona y que no descubrí hasta que comencé a aprender programación hace unos dos años. Considero que programar es un trabajo duro, pero es algo que realmente disfruto, ya que me encanta resolver problemas y encontrar soluciones ingeniosas. Me hace sentir que la programación es el talento oculto único que poseo, como el dicho de que “toda persona tiene un talento oculto”. Me considero una persona trabajadora, porque tengo el compromiso de terminar los proyectos en tiempo y forma y trabajar en ellos lo mejor que pueda. Aparte de la programación, me encanta la edición de videos que es el segundo talento que poseo, en el que he creado muchos videos con varios efectos visuales.</p>
                <img src={Liney} width="150px"></img>
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
                   <p className="createdby">Creado Por Anudeep Ayilalath Puthalath</p>
               </div>
           </div>
           </div>


            
        </div>

</div>
    )
}

export default Sobremi;