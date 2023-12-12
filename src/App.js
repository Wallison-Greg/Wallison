import './App.css';

//hooks
import { useEffect, useState } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

//components
import Header from './components/Header';
import Footer from './components/Footer';

//context
import { AuthProvider } from './context/AuthContext';

//router / firebase
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged} from 'firebase/auth';

//pages
import Home from './pages/Home/Home';
import AddProjects from './pages/AddProjects/AddProjects';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';

function App() {

  const [blackHeader, setBlackHeader] = useState(false);
  const [height, setHeight] = useState({sizeHeight: window.innerHeight});
  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => { //gerenciando a autenticação
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth]);

  const detectSize = () => { 
    setHeight({sizeHeight: window.innerHeight})
  }

  useEffect(() => { //pegando o tamanho da tela
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }

  }, [height]);

  useEffect(() => { //cabeçalho movel 
    const scrollListener = () =>{
      if(window.scrollY > height.sizeHeight - 115){
        setBlackHeader(true)
      }
      else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [height.sizeHeight]);

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <Header black={blackHeader}/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/projects' element={user ? <AddProjects/> : <Navigate to='/'/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/skills' element={<Skills/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
