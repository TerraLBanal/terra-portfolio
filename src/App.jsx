import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgressBar from './components/ScrollProgressBar'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CaseStudyUniform from './pages/CaseStudyUniform'
import CaseStudyNetworkDiagram from './pages/CaseStudyNetworkDiagram'
import CaseStudySteamies from './pages/CaseStudySteamies'
import About from './pages/About'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <ScrollToTop />
      <ScrollProgressBar />
      <Header />
      <main className="flex flex-1 flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/uniform" element={<CaseStudyUniform />} />
          <Route path="/work/network-diagram" element={<CaseStudyNetworkDiagram />} />
          <Route path="/work/steamies" element={<CaseStudySteamies />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
