import logo from './logo.svg';
import './App.css';

import Sidebar from './src/components/sidebar/Sidebar';
import Home from './src/components/home/Home';
import About from './src/components/about/About';
import Resume from './src/components/resume/Resume';
import Portfolio from './src/components/portfolio/Portfolio';
import Contact from './src/components/contact/Contact';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
