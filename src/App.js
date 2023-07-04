import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';


import {
  // When you are going to host your website in GitHub BrowserRouter won't work. So you need to implement 
  // HashRouter. The syntax is the same just change "BrowserRouter as Router," to "HashRouter as Router,"
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() { 
  const [mode, setMode] = useState(true);
  const [bgColor, setBgColor] = useState('bg-[#f4acb7]');
  const [alert, setAlert] = useState(null);
  const [winDim, setWinDim] = useState( {
    winWi: window.innerWidth,
    winHi: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWinDim({
        winWi: window.innerWidth,
        winHi: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if(mode) {
      setMode(false); console.log("clicked to false");
      setBgColor('bg-[#4a4e69]'); 
    }
    else {
      setMode(true); console.log("clicked to true");
      setBgColor('bg-[#f4acb7]');
    }
  }
  
  return (
    <>
      <Router>
        <div className={`${bgColor} h-screen w-screen`}>
          {/* <p className="text-center text-2xl font-bold text-white">Window Width: {winDim.winWi} and Window Height: {winDim.winHi}</p>  */}
          <Navbar title = "Text Editor" Darkmode = {mode} toggleMode = {toggleMode} showAlert = {showAlert} />
          <Alert Alart = {alert}/>
          
          <div className="container">
          <Routes>
            <Route path="/about" element={<About Darkmode={mode} />}>
            </Route>
            <Route path="/" element={<TextForm heading="Likh de jo khat tujhe:"  mode={mode} showAlert={showAlert} winDim = {winDim}/>}>
            </Route>
          </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
export default App;
