import "./aboutMe.scss"

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="cont-1">
        <div className="cont-1a">
          <img className="coffeePic" src="../../../src/assets/coffee5.jpg" alt="" />
          <img className="frontendLogo" src="../../../src/assets/reactlogo3.png" alt="" />
        </div>
        <div className="cont-1b">
          <h3>ABOUT ME</h3>
          <h2>Front-end Developer - React <br /> based in Ankara, Türkiye</h2>
          <p>Hey, my name is Furkan, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users. </p>
          <p>My main stack currently is React/Next.js in combination with SCSS and Material UI.</p>
        </div>
        <div className="shapeCircle">
      </div>
      </div>
    </div>
  )
}

export default AboutMe