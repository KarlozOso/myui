import Navbar from  "./components/Navbar"
import './App.css';
import CardPrices from "./components/CardPrices";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Spotify from "./components/Spotify";
import MyComponent from "./components/MyComponent";
import WhatsappButton from "./components/WhatsAppButton";



function App() {
  return (
    <div className="App bg-slate-600 pt-2 pb-6">
    <Navbar />
    <Hero />
    <CardPrices />
    <MyComponent />
    <WhatsappButton />
    </div>
  );
}

export default App;
