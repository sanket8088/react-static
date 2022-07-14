import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainComponent from './components/MainComponent/MainComponent'

function App() {
  return (
    <div className="App">
      <Header />
      <MainComponent />
      <Footer />
    </div>
  )
}

export default App
