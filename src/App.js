import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Service from './components/service/Service';
import Mextreo from './components/mextreo/Mextreo';
import Working from './components/working/Working';
import Client from './components/client/Client';
import Letest from './components/letest/Letest';
import Signup from './components/signup/Signup';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Service/>
     <Mextreo/>
     <Working/>
     <Client/>
     <Letest/>
     <Signup/>
     <Footer/>
    </div>
  );
}

export default App;
