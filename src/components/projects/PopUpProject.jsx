import "./popUpProject.scss"
import CancelIcon from '@mui/icons-material/Cancel';
import service1 from "../../assets/yaman-tarim.png"
import service2 from "../../assets/enkaymm.png"
import service3 from "../../assets/general.png"
import service4 from "../../assets/bill-creation.png"
import service5 from "../../assets/beautySaloon.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import billCreation from "../../assets/billCreation.mp4";
import customerPage from "../../assets/customerPage.mp4";
import tractor from "../../assets/tractor.png";
import tax from "../../assets/tax2.png";
import casting from "../../assets/casting.png";
import bill from "../../assets/bill.png";
import beauty from "../../assets/beauty.png";


const PopUpProject = ({ setPopUpState, popUpId }) => {

    const services = [
        {
            id: 1,
            name: "Agricultural Equipment",
            img: service1,
            link: "https://yamantarimaletleri.com/",
            icon: tractor,
            code: "https://github.com/frkndrk/yamantarim",
            desc: "A website that promotes agricultural equipment. This website consists of information about the company, equipment categories, and pages with details of these equipment."
        },
        {
            id: 2,
            name: "Financial Consultancy",
            img: service2,
            link: "https://enkaymm.com/",
            icon: tax,
            code: "https://github.com/frkndrk/certified_public_accountant_-cpa-",
            desc: "A site about certified public accountants. This website consists of information about this certified public accountant, categories of services provided and detailed explanations of these services."
        },
        {
            id: 3,
            name: "Iron Casting",
            img: service3,
            link: "https://generaldokum.vercel.app/",
            icon: casting,
            code: "https://github.com/frkndrk/generaldokum",
            desc: "The homepage of the website I prepared about the die casting industry. It includes general information about the company, the products they cast and the parts of the world they export to."
        },
        {
            id: 4,
            name: "Bill Creation Page",
            img: service4,
            video: billCreation,
            icon: bill,
            code: "https://github.com/frkndrk/billing-system",
            desc: "Bill creation page. The desired amount of products and services can be added or removed from the cart and a discount can be applied to the cart. By saving, a bill can be created for the previously selected customer."
        },
        {
            id: 5,
            name: "Beauty Saloon",
            img: service5,
            video: customerPage,
            icon: beauty,
            code: "https://github.com/frkndrk/billing-system",
            desc: "An admin panel where you can access the customer's appointments, invoices, current account, money points, notes, feedback, uploaded documents and photos from the customer list, and where you can add, remove and make changes."
        }
    ]

    return (
        <div className='popUpProject' onClick={() => setPopUpState(false)}>
            <div className="popUp" onClick={(e) => e.stopPropagation()}>
                <CancelIcon className="cancelIcon" onClick={() => setPopUpState(false)} />
                <div className="cont1" >
                    <div className="cont1A">
                        {services[popUpId - 1].video ? <video src={services[popUpId - 1].video} autoPlay controls></video> : <img src={services[popUpId - 1].img} alt="" />}
                    </div>
                    <div className="cont1B">
                        <h3>{services[popUpId - 1].name} <img src={services[popUpId - 1].icon && services[popUpId - 1].icon} alt="" /></h3>
                        <p>{services[popUpId - 1].desc}</p>
                        <div className="language">
                            <h4>React</h4>
                            <h4>SCSS</h4>
                        </div>
                        <div className="source">
                            <h5>Code <a href={services[popUpId - 1].code} target="_blank"><GitHubIcon /></a></h5>
                            {!services[popUpId - 1].video && <h5>Live {services[popUpId - 1].id === 3 && "Demo"} <a href={services[popUpId - 1].link} target="_blank" style={{ color: "#000", marginLeft: "5px", marginTop: "3px" }}><AdsClickIcon /></a></h5>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUpProject