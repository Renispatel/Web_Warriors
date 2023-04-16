import './App.css'

import Navbar from './components/navbar/navbar'

import About from './components/About/about'
import Connect from './components/Connect/connect'
import HomePage from './components/homePage/homePage'
import Cases from './components/selectedCases/cases'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <About />
      <Cases />
      <Connect />
      <Footer/>
    </div>
  )
}

export default App
