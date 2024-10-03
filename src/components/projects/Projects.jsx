import React, { useEffect, useState } from 'react'
import "./projects.scss"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Link } from 'react-router-dom';
import service1 from "../../assets/yaman-tarim.png"
import service2 from "../../assets/enkaymm.png"
import service3 from "../../assets/general.png"
import service4 from "../../assets/bill-creation.png"
import service5 from "../../assets/beautySaloon.png"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PopUpProject from './popUpProject';
import tractor from "../../assets/tractor.png";
import tax from "../../assets/tax2.png";
import casting from "../../assets/casting.png";
import bill from "../../assets/bill.png";
import beauty from "../../assets/beauty.png";

const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [popUpState, setPopUpState] = useState(false)
    const [popUpId, setPopUpId] = useState("")

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentSlide === 3) {
                setCurrentSlide(0)
            } else {
                setCurrentSlide(currentSlide + 1)
            }
        }, 5000)
        return () => clearTimeout(timer)
    }, [currentSlide])

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
            : setCurrentSlide(currentSlide < services.length - 3 ? currentSlide + 1 : 0)
    }

    const services = [
        {
            id: 1,
            name: "Agricultural Equipment",
            img: service1,
            link: "https://yamantarimaletleri.com/",
            icon: tractor
        },
        {
            id: 2,
            name: "Financial Consultancy",
            img: service2,
            link: "https://enkaymm.com/",
            icon: tax
        },
        {
            id: 3,
            name: "Iron Casting",
            img: service3,
            icon: casting
        },
        {
            id: 4,
            name: "Bill Creation Page",
            img: service4,
            video: true,
            icon: bill
        },
        {
            id: 5,
            name: "Beauty Saloon",
            img: service5,
            video: true,
            icon: beauty
        }
    ]

    const handlePopUpId = (item) => {
        setPopUpState(true);
        setPopUpId(item.id);
    }


    return (
        <div className='projects'>
            <h1>Projects</h1>
            <div className="container">
                <div className="slider">
                    {services.map((item) => (
                        <div key={item.id} className="contCards" style={{ transform: `translateX(-${currentSlide * 320}px)` }}>
                            <div className="card project" onClick={() => handlePopUpId(item)}>
                                <h3>{item.name} <img src={item.icon && item.icon} alt="" /></h3>
                                <img src={item.img} alt="" />
                                {item.video && <PlayCircleOutlineIcon className="playBtn" />}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="slider2">
                    {services.map((item) => (
                        <div key={item.id} className="contCards">
                            <div className="card project" onClick={() => handlePopUpId(item)}>
                                <h3>{item.name} <img src={item.icon && item.icon} alt="" /></h3>
                                <img src={item.img} alt="" />
                                {item.video && <PlayCircleOutlineIcon className="playBtn" />}
                            </div>
                        </div>
                    ))}
                </div>
                {!popUpState &&
                    <div>
                        <div className="leftArrow" onClick={() => handleClick("left")}><ArrowBackIosNewIcon /></div>
                        <div className="rightArrow" onClick={() => handleClick()} style={{ transform: "rotate(180deg)" }}><ArrowBackIosNewIcon /></div>
                    </div>
                }
            </div>
            {popUpState && <PopUpProject setPopUpState={setPopUpState} popUpId={popUpId} />}
        </div>
    )
}

export default Projects