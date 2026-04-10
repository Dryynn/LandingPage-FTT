import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Reasons from './components/Reasons/Reasons';
import Process from './components/Process/Process';
import Impact from './components/Impact/Impact';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Background Dots */}
      <div className="bg-grid-overlay"></div>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Reasons />
        <Process />
        <Impact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
