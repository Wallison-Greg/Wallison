import React, {useEffect, useState} from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

//img
import Logo from '../assets/img/logo_2.png'
import LoginImg from '../assets/img/login_img.png'

//icons 
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

//context
import { useAuthValue } from '../context/AuthContext';

//firebase
import { useAuthentication } from '../hooks/useAuthentication';

const Header = ({black}) => {

    const {user} = useAuthValue();
    const {logout, login, error: authError} = useAuthentication();

    const [active, seActive] = useState(false);
    const [acountActive, seAcountActive] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            email,
            password
        }

        const res = await login(user)

    }

    useEffect(() => {
        if(authError){
            setError(authError)
        }
    }, [authError])

    const menuMode = () => {
        seActive(!active);
    }
    const subMenuMode = () => {
        seAcountActive(!acountActive);
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
                    {user && (
                        <li>
                            <NavLink to='/projects'>Novo Projeto</NavLink>
                        </li>
                    )}
                    <li className='dropdown'>
                        <div className="menu-dropdown" onClick={subMenuMode}>
                            <div className='title-dropdown'>Contato</div>
                            <div className='perfil-dropdown'>
                                <img src={LoginImg} alt='login img'/>
                            </div>
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
                                {!user && (
                                    <form className='login' onSubmit={handleSubmit}>
                                        <h1>Login</h1>
                                        <label>
                                            <span>E-mail:</span>
                                            <input 
                                                type='text' 
                                                placeholder='E-mail' 
                                                required name='email'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)} 
                                            />
                                        </label>
                                        <label>
                                            <span>Senha:</span>
                                            <input 
                                                type='password' 
                                                placeholder='Senha' 
                                                required name='password'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)} 
                                            />
                                        </label>
                                        <button className='btn'>
                                            Entrar
                                        </button>
                                        {error && <p className='error'>{error}</p>}
                                    </form>
                                )}
                                {user && (
                                    <button onClick={logout} className='btn' style={{marginTop: 15}}>
                                        Sair
                                    </button>
                                )}
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

/* <div className='dropdown-img'></div> */