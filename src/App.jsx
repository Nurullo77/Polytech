import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Плавный скролл
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App

