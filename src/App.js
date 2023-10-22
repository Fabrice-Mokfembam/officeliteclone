import './App.css';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Cards from './components/cards/cards';
import Footer from './components/footer/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

   useEffect(() => {
    AOS.init();
   }, []);
  
  return (
    <div className="App">
      <div className='part1'>
      <Header />
      <Hero />
      <Cards />
      </div>
      <div className='foter'>
       <Footer/>
      </div>
      
    </div>
  );
}

export default App;
