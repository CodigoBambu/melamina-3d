import React from 'react'
import './styles/App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import FeaturedProducts from './sections/FeaturedProducts'

function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <FeaturedProducts />
    </main>
  )
}

export default App
