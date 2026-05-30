import react from 'react'
import '../styles/Profile.css'
import foto from '../assets/profile.png'
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";


const Profile = () => {
return (
    <div className="profile-window">
        <section className='terminal-profile-header'>
            <div className="terminal-btn-profile">
                <span className="btn-close"></span>
                <span className="btn-minimize"></span>
                <span className="btn-maximize"></span>
            </div>
        </section>
        <section className='profile-content'>
            <img src={foto} alt="" className="profile-photo" />
            <div className="profile-social">
                <a href="#" className="btn-social"><FiGithub className='social-icons' size={38}/></a>
                <a href="#" className="btn-social"><FaLinkedin className='social-icons' size={38}/></a>
                <a href="#" className="btn-social"><SiGmail className='social-icons' size={38}/></a>
            </div>
        </section>
    </div>
)
}

export default Profile;