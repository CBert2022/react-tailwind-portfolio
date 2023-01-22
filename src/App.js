import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { useState } from "react";

function App() {

  const [language, setLanguage] = useState(false);
  const [ligthMode, setLigthMode] = useState(false);
    const handleLanguage = () => setLanguage(!language);
    const handleMode = () => setLigthMode(!ligthMode);


  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} handleLanguage={handleLanguage} handleMode={handleMode}/>
      <Home language={language} setLanguage={setLanguage} ligthMode={ligthMode} setligthMode={setLigthMode} />
      <About language={language} setLanguage={setLanguage} ligthMode={ligthMode} setligthMode={setLigthMode} />
      <Skills language={language} setLanguage={setLanguage} ligthMode={ligthMode} setligthMode={setLigthMode} />
      <Work language={language} setLanguage={setLanguage} ligthMode={ligthMode} setligthMode={setLigthMode} />
      <Contact language={language} setLanguage={setLanguage} ligthMode={ligthMode} setligthMode={setLigthMode} />
    </div>
  );
}

export default App;