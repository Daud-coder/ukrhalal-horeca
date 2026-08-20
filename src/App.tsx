import { useState } from 'react'
import { Header } from './components/Header'
import Hero from './components/Hero'
import ProductsSection from './components/ProductsSection'
import { PriceRequestForm } from './components/PriceRequestForm'
import TrustBand from './components/TrustBand'
import { Modal } from './components/ui/Modal'
import { navLinks } from './data/nav'

const placeholderText = 'Тимчасова секція. Контент буде додано на наступному етапі.'

function App() {
  const [loginOpen, setLoginOpen] = useState(false)
  const [priceOpen, setPriceOpen] = useState(false)

  return (
    <>
      <Header onLoginClick={() => setLoginOpen(true)} onPriceClick={() => setPriceOpen(true)} />

      <main id="top">
        <Hero onPriceClick={() => setPriceOpen(true)} />
        <TrustBand />

        {navLinks.map((link) =>
          link.href === '#products' ? (
            <ProductsSection key={link.href} />
          ) : (
            <section key={link.href} id={link.href.slice(1)} className="min-h-[70vh] border-b border-hairline">
              <div className="mx-auto max-w-[1280px] px-6 py-16">
                <h2 className="font-display text-h2 font-bold text-ink md:text-h2-lg">{link.label}</h2>
                <p className="measure mt-3 text-body text-ink-muted">{placeholderText}</p>
              </div>
            </section>
          ),
        )}
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
