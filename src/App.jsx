import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import { About, Programs, Therapy, Shop, Journal, Contact } from './pages/SimplePage'

function App() {
  return (
    <div className="font-[Inter]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<><Nav /><About /></>} />
        <Route path="/programs" element={<><Nav /><Programs /></>} />
        <Route path="/therapy" element={<><Nav /><Therapy /></>} />
        <Route path="/shop" element={<><Nav /><Shop /></>} />
        <Route path="/journal" element={<><Nav /><Journal /></>} />
        <Route path="/contact" element={<><Nav /><Contact /></>} />
      </Routes>
    </div>
  )
}

export default App
