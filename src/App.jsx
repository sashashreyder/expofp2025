import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Features from './Features'
import DarkModeToggle from './DarkModeToggle'
import Gallery from './Gallery'
import Statistics from './Statistics'
import PricingSection from './PricingSection'
import ContactForm from './ContactForm'
import Footer from './Footer'
import './App.css'

function App() {

  return (
    <>
   <Navbar />
   <DarkModeToggle />
   <HeroSection />
   <Features />
   <Gallery />
   <Statistics />
   <PricingSection />
   <ContactForm />
   <Footer />
    </>
  )
}
  

export default App
