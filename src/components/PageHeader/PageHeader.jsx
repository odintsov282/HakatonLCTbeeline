import { useState } from 'react'
import { Link } from 'react-router-dom'
import beelineLogo from '../../assets/beeline-seeklogo.svg'
import profileIcon from '../../assets/icon-profile.svg'
import ProfileModal from '../ProfileModal/ProfileModal'

const PageHeader = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)

    return (
        <>
            <header className="menu__header">
                <div className="header__container">
                    <Link to="/" className="header__link-logo">
                        <img src={beelineLogo} alt="Билайн" width="44" height="44" />
                    </Link>
                    <div className="header__mini-container">
                        <button
                            type="button"
                            className="header__link-profile"
                            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                            onClick={() => setIsProfileOpen(true)}
                        >
                            <img src={profileIcon} alt="Профиль" width="36" height="40" />
                        </button>
                    </div>
                </div>
            </header>
            <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
        </>
    )
}

export default PageHeader
