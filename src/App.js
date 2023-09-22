import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import About from './About';
import { useState } from 'react';
import Textforms from './Textforms';
import Alert from './Alert';

function App() {
  const [mode, setMode] = useState("light")
  const toggleMode=()=>{
    if(mode=="light"){
      setMode('dark');
      document.body.style.backgroundColor="#0c0935";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
   <Nav head="Textos" mode={mode}  toggleMode={toggleMode}/>
   <Alert alert="Welcome to textos"/>
   <div className="container">
   <Textforms heading="Textform" mode={mode}/>

   </div> 
   
    </>
  );
}

export default App;
