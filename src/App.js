import React, { useState} from 'react'
import About from './components/About/About';
import Homepage from './components/Homepage/Homepage'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {

  
  

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#181a1c';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
        <Navbar brand="Vaibhav" mode={mode} toggleMode={toggleMode} />
        <Homepage homepageImage="../" mode={mode} />
        <Portfolio mode={mode}/>
        <About mode={mode}/>
        <Contact mode={mode}/>
    </>
  )
}

export default App