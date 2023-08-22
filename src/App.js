import Navbar from  "./components/Navbar"
import './App.css';
import CardPrices from "./components/CardPrices";
import Hero from "./components/Hero";
import Slider from "./components/Slider";


function App() {
  return (
    <div className="App bg-slate-600 pt-2 pb-6">
    <Navbar />
    <Hero />
    <CardPrices />
    <Slider />
    </div>
  );
}

export default App;
