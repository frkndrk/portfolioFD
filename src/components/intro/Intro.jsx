import "./intro.scss"
import { useEffect } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Intro = () => {

  useEffect(() => {

    const canvas = document.getElementById('Matrix');
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '01';

    const alphabet = nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops = [];

    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 0;
    }

    const draw = () => {
      context.fillStyle = 'rgba(255, 255, 255, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = 'rgba(0, 0, 0, 0.3)';/* 
      context.fillStyle = 'rgba(0, 0, 0, 0.3)'; */
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
    <div className="intro">
      <div className="cont">
        <div className="cont1">
          <div className="title">
            <h1>Front-End <span style={{ color: "#61DBFB" }}>React</span> Developer</h1>
            <p>Hi, I'm Furkan Durak. A passionate Front-end React Developer based in Ankara, Türkiye.</p>
            <ul className="icons1">
              <li><a href="https://www.linkedin.com/in/frkndrk/" target="_blank"><LinkedInIcon fontSize="large" /></a></li>
              <li><a href="https://github.com/frkndrk" target="_blank"><GitHubIcon fontSize="large" /></a></li>
            </ul>
          </div>
          <div className="profilePic">
            <div className="picCont">
            </div>
          </div>
        </div>
        <div className="skills">
          <p>Tech Stack</p>
          <ul className="icons">
            <div className="iconList">
              <li className="icon"><img src="../../src/assets/HTML.svg" alt="" /></li>
              <li className="icon"><img src="../../src/assets/CSS.svg" alt="" /></li>
              <li className="icon"><img src="../../src/assets/JavaScript.svg" alt="" /></li>
              <li className="icon"><img src="../../src/assets/React-Light.svg" alt="" /></li>
              <li className="icon"><img src="../../src/assets/ThreeJs-Light.svg" alt="" /></li>
            </div>
            <div className="iconList">
              <li className="icon"><img src="../../src/assets/Vite-Light.svg" alt="" /></li>
              <li className="icon"><img src="../../src/assets/Sass.svg" alt="" /></li>
              <li className="icon"><img src="../../src/assets/Bootstrap.svg" alt="" /></li>
              <li className="icon"><img src="../../src/assets/Laravel-Light.svg" alt="" /></li>
              <li className="icon"><img src="../../src/assets/MaterialUI-Light.svg" alt="" /></li>
            </div>
          </ul>
        </div>
      </div>
      <canvas id="Matrix"></canvas>
    </div>
  )
}

export default Intro


{/* 
              <li className="icon"><img src="../../src/assets/Git.svg" alt="" /></li>
              <li className="icon"><img src="../../src/assets/JQuery.svg" alt="" /></li> */}