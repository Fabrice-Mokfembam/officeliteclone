import './App.css';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Cards from './components/cards/cards';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <div className='part1'>
      <Header className='g'/>
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
