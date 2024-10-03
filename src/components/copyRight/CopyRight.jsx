import "./copyRight.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const CopyRight = () => {
  return (
    <div className="copyRight">
        <div className="contC">
            <p>Copyright © 2024. All rights are reserved</p>
            <div className="iconsC">
                <span><LinkedInIcon /></span>
                <span><GitHubIcon /></span>
            </div>
        </div>
    </div>
  )
}

export default CopyRight