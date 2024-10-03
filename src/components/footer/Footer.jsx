import "./footer.scss"
import profile from "../../assets/profile1.jpeg"
import click from "../../assets/click.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { useEffect, useState } from "react";

const Footer = () => {

    const [navbar, setNavbar] = useState(false)
    const [lineSlide1, setLineSlide1] = useState(false)
    const [lineSlide2, setLineSlide2] = useState(false)
    const [lineSlide3, setLineSlide3] = useState(false)

    const scrollNum = () => {
        if (window.scrollY >= 1650 && window.innerWidth >= 931) {
            setNavbar(true)
        } else if(window.scrollY >= 2200 && window.scrollY <= 2600 && window.innerWidth <= 930 && window.innerWidth > 905) {
            setNavbar(true)
        } else if(window.scrollY >= 1900 && window.innerWidth <= 350) {
            setNavbar(true)
        } else if(window.scrollY >= 2000 && window.innerWidth <= 450) {
            setNavbar(true)
        } else if(window.scrollY >= 2200 && window.innerWidth <= 512) {
            setNavbar(true)
        } else if(window.scrollY >= 2300 && window.innerWidth <= 712) {
            setNavbar(true)
        } else if(window.scrollY >= 2601 && window.innerWidth <= 905 && window.innerWidth > 712 ) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        console.log(window.scrollY)
        console.log("width:", window.innerWidth)
    })

    window.addEventListener("scroll", scrollNum);

    useEffect(() => {
        if(navbar) {
            const lineSlideFirst = setTimeout(() => {
                setLineSlide1(true)
            }, 500);
            return () => clearTimeout(lineSlideFirst);
        } else {
            setLineSlide1(false)
        }
    }, [navbar])

    useEffect(() => {
        if(navbar) {
            const lineSlideSecond = setTimeout(() => {
                setLineSlide2(true)
            }, 800);
            return () => clearTimeout(lineSlideSecond);
        } else {
            setLineSlide2(false)
        }
    }, [navbar])

    useEffect(() => {
        if(navbar) {
            const lineSlideThird = setTimeout(() => {
                setLineSlide3(true)
            }, 1000);
            return () => clearTimeout(lineSlideThird);
        } else {
            setLineSlide3(false)
        }
    }, [navbar])

    return (
        <div className={navbar ? "footer activeF" : "footer inactiveF"}>
            <div className={navbar ? "contF active" : "contF inactive"}>
                <div className="leftCont">
                    <div className="pic">
                        <img src={profile} alt="" />
                    </div>
                    <div className="contact">
                        <h2>CONTACT</h2>
                        <p>Get in touch! <img src={click} alt="" /></p>
                    </div>
                    <div className="info">
                        <div className="icon1 location">
                            <LocationOnIcon className="icons" />
                            <div className="iconCont">
                                <span className="iconTitle">Location</span>
                                <p>Ankara, TÜRKİYE</p>
                            </div>
                        </div>
                        <div className="icon1 mail">
                            <EmailIcon className="icons" />
                            <div className="iconCont">
                                <span className="iconTitle">Mail</span>
                                <p>furkandurak.dev@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightCont">
                    <div className="lines">
                        <div className={lineSlide1 ? "line1 active1" : "line1"}></div>
                        <div className={lineSlide2 ? "line2 active2" : "line2"}></div>
                        <div className={lineSlide3 ? "line3 active3" : "line3"}></div>
                        <div className="line4"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer