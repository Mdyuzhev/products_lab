import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Championship from './pages/Championship'

function App() {
  return (
    <BrowserRouter basename="/products_lab">
      <ScrollToTop />
      <div className="min-h-screen bg-slate-950 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/championship" element={<Championship />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
