import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CaseStudyUniform from './pages/CaseStudyUniform'
import CaseStudyNetworkDiagram from './pages/CaseStudyNetworkDiagram'
import CaseStudyPlaceholder from './pages/CaseStudyPlaceholder'
import About from './pages/About'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <ScrollToTop />
      <Header />
      <main className="flex flex-1 flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/uniform" element={<CaseStudyUniform />} />
          <Route path="/work/network-diagram" element={<CaseStudyNetworkDiagram />} />
          <Route
            path="/work/steamies"
            element={<CaseStudyPlaceholder index={3} title="Steamies Dumplings, brand & identity" />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
