import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Docs from './pages/Docs'
import Schedule from './pages/Schedule'
import Portfolio from './pages/Portfolio'

import ComingSoonPage from './pages/ComingSoonPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
      <Routes>
        {/* 既存の主要ページ */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/portfolio" element={<Portfolio />} />

        {/* 作成中ページ例 */}
        <Route path="/project" element={<ComingSoonPage />} />
        <Route path="/contact" element={<ComingSoonPage />} />
        <Route path="/hobby-blog" element={<ComingSoonPage />} />

        {/* それ以外のURLは404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
  )
}