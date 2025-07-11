import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <header>
        <h1>Jan Manders</h1>
        <nav>
          <Link to="/">About</Link> | <Link to="/dashboard">Projects</Link>
        </nav>
      </header>
      <main style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
