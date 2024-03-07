import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';
import Navbar from "./Components/Navbar/Navbar"
import Hero from './Components/Hero/Hero';
import Grid from './Components/Grid/Grid';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Card/>
      <Grid/>
      <Footer/>
    </div>
  );
}

export default App;
