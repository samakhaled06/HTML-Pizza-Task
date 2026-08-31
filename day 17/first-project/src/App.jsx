import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Parent from './components/Parent/Parent'
import Home from './components/home/home'
import Footer from './components/Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Parent/>
      <Footer/>
      

    </>
  )
}

export default App
