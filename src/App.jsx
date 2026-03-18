import Navbar from './components/Navbar';
import Scene from './components/Scene';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
        <Scene />
      </div>
      <main className="content">
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}

export default App;
