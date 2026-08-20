import { useState } from 'react'
import { Header } from './components/Header'
import Hero from './components/Hero'
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

        {navLinks.map((link) => (
          <section key={link.href} id={link.href.slice(1)} className="min-h-[70vh] border-b border-hairline">
            <div className="mx-auto max-w-[1280px] px-6 py-16">
              <h2 className="font-display text-3xl font-bold text-ink">{link.label}</h2>
              <p className="mt-3 text-ink-muted">{placeholderText}</p>
            </div>
          </section>
        ))}
      </main>

      <Modal open={loginOpen} onClose={() => setLoginOpen(false)} title="Увійти в кабінет">
        <p>Форма входу буде додана на наступному етапі.</p>
      </Modal>

      <Modal open={priceOpen} onClose={() => setPriceOpen(false)} title="Запросити прайс">
        <p>Форма запиту прайсу буде додана на наступному етапі.</p>
      </Modal>
    </>
  )
}

export default App
