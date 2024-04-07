import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import './App.css'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import Expertise from './components/Expertise'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <Expertise />
      <Footer />
    </>
  )
}

export default App
