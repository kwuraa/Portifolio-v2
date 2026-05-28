import react from 'react'
import '../styles/Profile.css'
import foto from '../assets/profile.png'

const Profile = () => {
return (
    <container className="profile-window">
        <div className="terminal-buttons">
            <span className="btn-close"></span>
            <span className="btn-minimize"></span>
            <span className="btn-maximize"></span>
        </div>
        <img src={foto} alt="" className="profile-photo" />
        <div className="profile-social">
            <a href="#" className="btn-social">INSTA</a>
            <a href="#" className="btn-social">GitHub</a>
            <a href="#" className="btn-social">E-mail</a>
        </div>
    </container>
)
}

export default Profile;