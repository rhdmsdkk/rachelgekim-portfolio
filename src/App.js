import "./App.css";

import Home from "./components/home/Home";
import About from "./components/_archive/about/About";
import Resume from "./components/_archive/resume/Resume";
import Portfolio from "./components/_archive/portfolio/Portfolio";
import Contacts from "./components/_archive/contacts/Contacts";

function App() {
  return (
    <>
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contacts />
    </>
  );
}

export default App;
