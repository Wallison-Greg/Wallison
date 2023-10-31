import './App.css';
import { useEffect, useState } from 'react';

//components
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import Home from './pages/Home/Home';

function App() {

  const [blackHeader, setBlackHeader] = useState(false);
  const [height, setHeight] = useState({sizeHeight: window.innerHeight});

  const detectSize = () => {
    setHeight({sizeHeight: window.innerHeight})
  }

  useEffect(() => {
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
      <Header black={blackHeader}/>
      <Home/>
      <Footer />
    </div>
  );
}

export default App;
