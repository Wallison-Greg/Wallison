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
import NotFound from './pages/NotFound/NotFound';

function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => { //gerenciando a autenticação
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth]);

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/projects' element={user ? <AddProjects/> : <Navigate to='/'/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/skills' element={<Skills/>} />
            <Route path='/notfound' element={<NotFound/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
