import Navbar from './Components/Navbar'
import './App.css'
import HeroSection from './Components/HeroSection'
import Feature from './Components/Feature'

function App() {
 

  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection/>
      <Feature/>
    </div>
    
     </>
  )
}

export default App
