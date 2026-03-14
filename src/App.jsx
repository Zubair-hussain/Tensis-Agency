import { useCursor } from './hooks/useCursor'
import { useScrollReveal } from './hooks/useScrollReveal'

import Cursor   from './components/Cursor'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Ticker   from './components/Ticker'
import Services from './components/Services'
import Marquee  from './components/Marquee'
import About    from './components/About'
import Team     from './components/Team'
import CTA      from './components/CTA'
import Footer   from './components/Footer'

import './styles/global.css'

export default function App() {
  useCursor()
  useScrollReveal()

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Marquee />
        <About />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
