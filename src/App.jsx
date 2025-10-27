import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero.jsx'
import NavBar from './components/NavBar.jsx'
import ThreeD from './components/ThreeD.jsx'
import Showcase from './components/Showcase.jsx'
import Templates from './components/Templates.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'

function Home() {
  return (
    <>
      <Hero />
      <ThreeD />
      <Showcase />
      <Portfolio/>
      <ContactForm />
      
    </>
  )
}

function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
