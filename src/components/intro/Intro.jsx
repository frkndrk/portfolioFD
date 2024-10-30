import "./intro.scss"
import { useEffect } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import jsIcon from "../../assets/JavaScript.svg"
import reactIcon from "../../assets/React-Dark.svg"
import threejsIcon from "../../assets/ThreeJS-Dark.svg"
import sassIcon from "../../assets/Sass.svg"
import bootstrapIcon from "../../assets/Bootstrap.svg"
import muiIcon from "../../assets/MaterialUI-Dark.svg"
import next from "../../assets/NextJS-Dark.svg"
import jquery from "../../assets/JQuery.svg"

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
            <p>Hi, I'm Furkan Durak. A Front End Developer who is open to development and loves to learn.</p>
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
              <li className="icon"><img src={jsIcon} alt="furkandurak, furkan durak, Furkan Durak, Furkan DURAK, front end, frontend, developer, FURKAN DURAK, FURKANDURAK, software, development, web, web design, webdesign, design, portfolio" /></li>
              <li className="icon"><img src={reactIcon} alt="furkandurak, furkan durak, Furkan Durak, Furkan DURAK, front end, frontend, developer, FURKAN DURAK, FURKANDURAK, software, development, web, web design, webdesign, design, portfolio" /></li>
              <li className="icon"><img src={threejsIcon} alt="furkandurak, furkan durak, Furkan Durak, Furkan DURAK, front end, frontend, developer, FURKAN DURAK, FURKANDURAK, software, development, web, web design, webdesign, design, portfolio" /></li>
              <li className="icon"><img src={next} alt="furkandurak, furkan durak, Furkan Durak, Furkan DURAK, front end, frontend, developer, FURKAN DURAK, FURKANDURAK, software, development, web, web design, webdesign, design, portfolio" /></li>
            </div>
            <div className="iconList">
              <li className="icon"><img src={jquery} alt="furkandurak, furkan durak, Furkan Durak, Furkan DURAK, front end, frontend, developer, FURKAN DURAK, FURKANDURAK, software, development, web, web design, webdesign, design, portfolio" /></li>
              <li className="icon"><img src={sassIcon} alt="furkandurak, furkan durak, Furkan Durak, Furkan DURAK, front end, frontend, developer, FURKAN DURAK, FURKANDURAK, software, development, web, web design, webdesign, design, portfolio" /></li>
              <li className="icon"><img src={bootstrapIcon} alt="furkandurak, furkan durak, Furkan Durak, Furkan DURAK, front end, frontend, developer, FURKAN DURAK, FURKANDURAK, software, development, web, web design, webdesign, design, portfolio" /></li>
              <li className="icon"><img src={muiIcon} alt="furkandurak, furkan durak, Furkan Durak, Furkan DURAK, front end, frontend, developer, FURKAN DURAK, FURKANDURAK, software, development, web, web design, webdesign, design, portfolio" /></li>
            </div>
          </ul>
        </div>
      </div>
      <canvas id="Matrix"></canvas>
    </div>
  )
}

export default Intro