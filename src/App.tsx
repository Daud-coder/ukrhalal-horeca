import { useState } from 'react'
import AboutSection from './components/AboutSection'
import Advantages from './components/Advantages'
import ContactSection from './components/ContactSection'
import { Header } from './components/Header'
import Hero from './components/Hero'
import ProductsSection from './components/ProductsSection'
import { PriceRequestForm } from './components/PriceRequestForm'
import { Modal } from './components/ui/Modal'
import { navLinks } from './data/nav'

function App() {
  const [loginOpen, setLoginOpen] = useState(false)
  const [priceOpen, setPriceOpen] = useState(false)

  return (
    <>
      <Header onLoginClick={() => setLoginOpen(true)} onPriceClick={() => setPriceOpen(true)} />

      <main id="top">
        <Hero onPriceClick={() => setPriceOpen(true)} />
        <Advantages />
        <AboutSection />

        {navLinks.map((link) => {
          if (link.href === '#about' || link.href === '#advantages') return null
          if (link.href === '#products') return <ProductsSection key={link.href} />
          if (link.href === '#contact') return <ContactSection key={link.href} />
          return null
        })}
      </main>

      <Modal open={loginOpen} onClose={() => setLoginOpen(false)} title="Увійти в кабінет">
        <p className="measure text-body">Форма входу буде додана на наступному етапі.</p>
      </Modal>

      <Modal open={priceOpen} onClose={() => setPriceOpen(false)} title="Запросити прайс">
        <PriceRequestForm onDone={() => setPriceOpen(false)} />
      </Modal>
    </>
  )
}

export default App
