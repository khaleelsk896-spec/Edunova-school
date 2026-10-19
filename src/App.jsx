import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Academics from "./components/Academics";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import Scrollprogress from "./components/Scrollprogress";
import Backtotop from "./components/Backtotop";
import WhatsApp from "./components/Whatsapp.jsx"
function App() {
  return (
    <>
      <Scrollprogress />
      <Navbar />
      <Hero />
      <About />
      <Academics />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsApp />
      <Backtotop />
    </>
  );
}

export default App;
