import './App.css';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Libros from './sections/Libros';
import Metodologia from './sections/Metodologia';
import Servicios from './sections/Servicios';
import Testimonios from './sections/Testimonios';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import WaveDivider from './components/WaveDivider';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <WaveDivider topColor="#f0fdfa" bottomColor="#ffffff" variant={3} />
        <About />
        <WaveDivider topColor="#ffffff" bottomColor="#FFF5F7" variant={1} />
        <Libros />
        <WaveDivider topColor="#FFF5F7" bottomColor="#F0FDFB" variant={2} />
        <Metodologia />
        <WaveDivider topColor="#F0FDFB" bottomColor="#ffffff" variant={2} />
        <Servicios />
        <WaveDivider topColor="#ffffff" bottomColor="#FFF5F7" variant={3} />
        <Testimonios />
        <WaveDivider topColor="#FFF5F7" bottomColor="#ffffff" variant={1} />
        <CTA />
        <WaveDivider topColor="#ffffff" bottomColor="#111827" variant={2} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
