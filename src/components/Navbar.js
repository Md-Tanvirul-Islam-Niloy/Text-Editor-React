import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  
  const [barColor, setbarColor] = useState('bg-[#006d77]');// This state is for the color of the navbar
  const [toggleButtonBg, settoggleButtonBg] = useState('bg-white'); // This state is for the color of the toggle button
  // const switchToggle = document.querySelector('#switch-toggle');
  
    const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>`

    const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>`

    const toggleTheme = () => {
      props.toggleMode();
      switchTheme()
    }

    const switchTheme = () =>{
      const switchToggle = document.querySelector('#switch-toggle');
      if (props.Darkmode) {
        switchToggle.classList.remove('bg-yellow-500','-translate-x-2')
        switchToggle.classList.add('bg-gray-700','translate-x-full')
        setTimeout(() => {
          switchToggle.innerHTML = darkIcon
        }, 250);

        // set bar color
        setbarColor('bg-[#22577a]')
        settoggleButtonBg('bg-black');
        props.showAlert("Dark mode has been enabled"); // This will show the alert
      } else {
        switchToggle.classList.add('bg-yellow-500','-translate-x-2')
        switchToggle.classList.remove('bg-gray-700','translate-x-full')
        setTimeout(() => {
          switchToggle.innerHTML = lightIcon
        }, 250);

        // set bar color
        setbarColor('bg-[#006d77]')
        settoggleButtonBg('bg-white');
        props.showAlert("Light mode has been enabled"); // This will show the alert
      }
    }


  return (
    <div>
      <nav className={`flex items-center justify-between flex-wrap ${barColor} p-6`}>
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a href="https://www.facebook.com/profile.php?id=100009705485456" className="flex items-center">
            <img src="https://img.icons8.com/?size=1x&id=Qdim3bdw4UPX&format=png" className="h-8 mr-3" alt="Text Editor Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{props.title}</span>
          </a>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow flex justify-end items-end">
            <ul className="flex felx-col space-x-5">
              <Link className="text-[#E6E8E6] hover:text-red-800" to="/">Home</Link>
              <Link className="text-[#E6E8E6] hover:text-red-800" to="/about">About</Link>
              {/* <Link className="text-[#E6E8E6] hover:text-red-800">Contact</Link> */}
              {/* This Button for the light and dark mode  */}
              <button //////////////////////////////////////////////////
                  className={`w-14 h-6 rounded-full ${toggleButtonBg} flex items-center transition duration-300 focus:outline-none shadow`}
                  onClick={toggleTheme}>
                  <div
                      id="switch-toggle"
                      className={`w-8 h-8 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-.5 p-1 text-white`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                  </div>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

// For setting type of props
Navbar.propTypes = { title: PropTypes.string.isRequired }

// For setting default props
Navbar.defaultProps = { title: "Text Editor" }