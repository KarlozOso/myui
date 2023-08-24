import Navbar from  "./components/Navbar"
import './App.css';
import CardPrices from "./components/CardPrices";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Spotify from "./components/Spotify";
import MyComponent from "./components/MyComponent";
import WhatsappButton from "./components/WhatsAppButton";
import Cards from "./components/Cards"
import Section from "./components/Section";



function App() {
  return (
    <div className="App  dark:bg-slate-600 bg-white pt-2 pb-6">
    <Navbar />
    <Hero />
    <CardPrices />
    <MyComponent />
    <WhatsappButton />
      <Section />
      <Cards />
    </div>
  );
}

export default App;
