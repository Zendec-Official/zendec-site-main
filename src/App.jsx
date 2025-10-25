import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero.jsx'
import NavBar from './components/NavBar.jsx'
import ThreeD from './components/ThreeD.jsx'
import Parallax from './components/Parallax.jsx'
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
      <Parallax />
      <Templates />
      <Portfolio/>
      <ContactForm />
      <Footer />
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
      </Routes>
    </main>
  )
}

export default App
