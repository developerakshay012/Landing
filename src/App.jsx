import Navbar from './Components/Navbar'
import './App.css'
import HeroSection from './Components/HeroSection'
import Feature from './Components/Feature'
import Flow from './Components/Flow'
import Pricing from './Components/Pricing'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'

function App() {
 

  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection/>
      <Feature/>
      <Flow/>
      <Pricing/>
      <Testimonial/>
      <Footer/>
    </div>
    
     </>
  )
}

export default App
