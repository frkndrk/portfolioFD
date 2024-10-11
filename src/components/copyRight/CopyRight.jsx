import "./copyRight.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const CopyRight = () => {
  return (
    <div className="copyRight">
        <div className="contC">
            <p>Copyright © 2024. All rights are reserved</p>
            <div className="iconsC">
                <span><a href="https://www.linkedin.com/in/frkndrk/" target="_blank"><LinkedInIcon fontSize="large" /></a></span>
                <span><a href="https://github.com/frkndrk" target="_blank"><GitHubIcon fontSize="large" /></a></span>
            </div>
        </div>
    </div>
  )
}

export default CopyRight