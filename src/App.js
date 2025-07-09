import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <section id="home"><Hero></Hero></section>
      <section id="about"><About></About></section>
      <section id="experience"><Experience></Experience></section>
      <section id="projects"><Projects></Projects></section>
      <Footer></Footer>
    </>
  );
}

export default App;
