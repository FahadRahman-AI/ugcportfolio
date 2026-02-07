import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import SetupPage from './pages/SetupPage'
import ContactPage from './pages/ContactPage'
import PortfolioPage from './pages/PortfolioPage'
import ProcessPage from './pages/ProcessPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/setup" element={<SetupPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/work" element={<PortfolioPage />} />
          <Route path="/process" element={<ProcessPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
