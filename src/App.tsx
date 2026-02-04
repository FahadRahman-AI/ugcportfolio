import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import WorkingTogether from './components/WorkingTogether'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Philosophy />
      <Portfolio />
      <Skills />
      <Testimonials />
      <WorkingTogether />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
