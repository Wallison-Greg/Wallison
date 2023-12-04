import './App.css';
import { useEffect, useState } from 'react';

//components
import Header from './components/Header';
import Footer from './components/Footer';

//router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//pages
import Home from './pages/Home/Home';
import AddProjects from './pages/AddProjects/AddProjects';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';

function App() {

  const [blackHeader, setBlackHeader] = useState(false);
  const [height, setHeight] = useState({sizeHeight: window.innerHeight});

  const detectSize = () => { 
    setHeight({sizeHeight: window.innerHeight})
  }

  useEffect(() => { //pegando o tamanho da tela
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }

  }, [height])

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
  }, [height.sizeHeight])

  return (
    <div className="App">
      <BrowserRouter>
        <Header black={blackHeader}/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<AddProjects/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/skills' element={<Skills/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
