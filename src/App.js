import './App.css';

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contacts from './components/contacts/Contacts';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contacts />
      </main>
    </>
  );
}

export default App;
