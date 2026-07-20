import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CaseStudyUniform from './pages/CaseStudyUniform'
import CaseStudyPlaceholder from './pages/CaseStudyPlaceholder'
import About from './pages/About'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />
      <main className="flex flex-1 flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/uniform" element={<CaseStudyUniform />} />
          <Route
            path="/work/network-diagram"
            element={<CaseStudyPlaceholder index={2} title="Network Diagram Redesign, IBM Security" />}
          />
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
