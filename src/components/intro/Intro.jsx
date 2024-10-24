import "./intro.scss"
import { useEffect } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import htmlIcon from "../../assets/HTML.svg"
import cssIcon from "../../assets/CSS.svg"
import jsIcon from "../../assets/JavaScript.svg"
import reactIcon from "../../assets/React-Light.svg"
import threejsIcon from "../../assets/ThreeJS-Light.svg"
import viteIcon from "../../assets/Vite-Light.svg"
import sassIcon from "../../assets/Sass.svg"
import bootstrapIcon from "../../assets/Bootstrap.svg"
import laravelIcon from "../../assets/Laravel-Light.svg"
import muiIcon from "../../assets/MaterialUI-Light.svg"

const Intro = () => {

  useEffect(() => {

    const canvas = document.getElementById('Matrix');
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '01';

    const alphabet = katakana + latin + nums;

    const fontSize = 11;
    const columns = canvas.width / fontSize;

    const rainDrops = [];

    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 0;
    }

    const draw = () => {
      context.fillStyle = 'rgba(255, 255, 255, 0.05 )';
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = 'rgba(0, 0, 0, .5)';
      context.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    setInterval(draw, 50);
  }, [])



  return (
    <div className="intro" id="intro">
      <div className="cont">
        <div className="cont1">
          <div className="title">
            <h1>Front-End <span style={{ color: "rgb(138, 140, 141)" }}>React</span> Developer</h1>
            <p>Hi, I'm Furkan Durak. A passionate Front-end React Developer based in Ankara, Türkiye.</p>
            <div className="findMe">
              <h3 id="fm1">Find Me</h3>
              <ul className="icons1">
                <li><a href="https://www.linkedin.com/in/frkndrk/" target="_blank"><LinkedInIcon fontSize="large" /></a></li>
                <li><a href="https://github.com/frkndrk" target="_blank"><GitHubIcon fontSize="large" /></a></li>
              </ul>
            </div>
          </div>
          <div className="profilePic">
            <div className="picCont">
            </div>
          </div>
        </div>
        <div className="skills">
          <p style={{ fontWeight: "bold" }}>Best Skills</p>
          <ul className="icons">
            <div className="iconList">
              {/* <li className="icon"><img src={htmlIcon} alt="" /></li>
              <li className="icon"><img src={cssIcon} alt="" /></li> */}
              <li className="icon"><img src={jsIcon} alt="" /></li>
              <li className="icon"><img src={reactIcon} alt="" /></li>
              <li className="icon"><img src={threejsIcon} alt="" /></li>
              <li className="icon"><img src={viteIcon} alt="" /></li>
            </div>
            <div className="iconList">
              <li className="icon"><img src={sassIcon} alt="" /></li>
              <li className="icon"><img src={bootstrapIcon} alt="" /></li>
              <li className="icon"><img src={laravelIcon} alt="" /></li>
              <li className="icon"><img src={muiIcon} alt="" /></li>
            </div>
          </ul>
        </div>
      </div>
      <canvas id="Matrix"></canvas>
    </div>
  )
}

export default Intro