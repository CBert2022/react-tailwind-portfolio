import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { useState } from "react";

function App() {

  const [language, setLanguage] = useState(false);
    const handleLanguage = () => setLanguage(!language);


  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} handleLanguage={handleLanguage} />
      <Home language={language} setLanguage={setLanguage}  />
      <About language={language} setLanguage={setLanguage}  />
      <Skills language={language} setLanguage={setLanguage}  />
      <Work language={language} setLanguage={setLanguage}  />
      <Contact language={language} setLanguage={setLanguage}  />
    </div>
  );
}

export default App;