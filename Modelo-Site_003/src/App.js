import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Client from './components/client/Client';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Portfolio/>
    <Client/>
    <Services/>
    <Footer/>
    </>
  );
}

export default App;
