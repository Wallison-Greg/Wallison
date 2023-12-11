import React, {useState} from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/img/logo_2.png'

//icons 
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Header = ({black}) => {

    const [active, seActive] = useState(false);
    const [acountActive, seAcountActive] = useState(false);

    const menuMode = () => {
        seActive(!active);
    }
    const subMenuMode = () => {
        seAcountActive(!acountActive);
        console.log(acountActive)
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
                        <NavLink to='/projects'>Novo Projeto</NavLink>
                    </li>
                    <li className='dropdown' onClick={subMenuMode}>
                        <div className="menu-dropdown">
                            <div className='title-dropdown'>Contato</div>
                            <div className='perfil-dropdown'></div>
                        </div>
                        <div className={acountActive ? 'acount-open sub-menu' : 'sub-menu'}>
                            <div class="acount">
                                <h1>Contato</h1>
                                <div className='contact'>
                                    <a className='icon' href='https://github.com/Wallison-Greg' target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon />
                                    </a>
                                    <a className='icon' href='https://wa.me/5562999769017' target="_blank" rel="noopener noreferrer">
                                        <WhatsAppIcon />
                                    </a>
                                    <a className='icon' href='https://www.linkedin.com/in/wallison-gregorio-ba23a922b/' target="_blank" rel="noopener noreferrer">
                                        <LinkedInIcon />
                                    </a>
                                </div>
                                <div className='linha'></div>
                                <form className='login'>
                                    <h1>Login</h1>
                                    <label>
                                        <span>E-mail:</span>
                                        <input type='text' placeholder='E-mail' required name='email' />
                                    </label>
                                    <label>
                                        <span>Senha:</span>
                                        <input type='text' placeholder='Senha' required name='password' />
                                    </label>
                                </form>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header

/*
<NavLink to='#'>Contato</NavLink>
*/