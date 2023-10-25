import './App.css';
import { useEffect, useState } from 'react';

//components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => { //cabeçalho movel 
    const scrollListener = () =>{
      if(window.scrollY > 10){
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
  }, [])

  return (
    <div className="App">
      <Header black={blackHeader}/>
      <Footer/>
    </div>
  );
}

export default App;
