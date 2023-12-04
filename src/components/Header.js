import React, {useState} from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import Logo from '../img/logo_2.png'

const Header = ({black}) => {

    const [active, seActive] = useState(false);

    const menuMode = () => {
        seActive(!active);
    }

  return (
    <header className={black ? "black" : ""}>
        <div className='logo'>
            <NavLink to='/'>
                <img src={Logo} alt='logo'/>
            </NavLink>
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
                        <NavLink to='/'>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>Sobre Mim</NavLink>
                    </li>
                    <li>
                        <NavLink to='/skills'>Habilidades</NavLink>
                    </li>
                    <li>
                        <NavLink to='#'>Novo Projeto</NavLink>
                    </li>
                    <li>
                        <NavLink to='#'>Contato</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header