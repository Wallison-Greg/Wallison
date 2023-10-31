import React, {useState} from 'react'
import './Header.css'

import Logo from '../img/logo_2.png'

const Header = ({black}) => {

    const [active, seActive] = useState(false);

    const menuMode = () => {
        seActive(!active);
    }

  return (
    <header className={black ? "black" : ""}>
        <div className='logo'>
            <a href='/'>
                <img src={Logo} alt='logo'/>
            </a>
        </div>
        <div className='menu-area'>
            <div 
                className={active ? 'hamburger open' : 'hamburger'} 
                onClick={menuMode}
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={active ? 'menu close' : 'menu'}>
                <ul>
                    <li>
                        <a href='#'>Inicio</a>
                    </li>
                    <li>
                        <a href='#'>Sobre Mim</a>
                    </li>
                    <li>
                        <a href='#'>Habilidades</a>
                    </li>
                    <li>
                        <a href='#'>Projetos</a>
                    </li>
                    <li>
                        <a href='#'>Contato</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header