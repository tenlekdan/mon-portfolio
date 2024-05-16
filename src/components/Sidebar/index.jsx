import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import Logos from '../../assets/images/t.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faReddit, faYoutube } from '@fortawesome/free-brands-svg-icons';
const SideBar = () => {

    return (
        <div className="nav-bar">
            <Link className="logo" to="/" >
                <img src={Logos} alt="logo" />
                <span className='sub-logo'>Tenzin</span>
            </Link>
            <nav>
                <NavLink exact="true" className={(n) => n.isActive ? 'active': undefined} to="/" >
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" className={(n) => n.isActive ? 'about-link active': 'about-link'} to="/about" >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" className={(n) => n.isActive ? 'contact-link active': 'contact-link'} to="/contact" >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>

            <ul>
                <li>
                    <a targe="_blank"  rek="noreferrer" href='https://www.linkedin.com'>
                        <FontAwesomeIcon color="#4d4d4e" icon={faLinkedin}></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a targe="_blank"  rek="noreferrer" href='https://www.github.com'>
                        <FontAwesomeIcon color="#4d4d4e" icon={faGithub}></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a targe="_blank"  rek="noreferrer" href='https://www.youtube.com'>
                        <FontAwesomeIcon color="#4d4d4e" icon={faYoutube}></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a targe="_blank"  rek="noreferrer" href='https://www.reddit.com'>
                        <FontAwesomeIcon color="#4d4d4e" icon={faReddit}></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
        </div>

    )
}

export default SideBar;