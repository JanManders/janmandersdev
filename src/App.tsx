// App.tsx
// Root component that sets up routing, shared header, and the hero banner.
// Renders pages via <Routes> and wraps them in a consistent layout using <Layout />.

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <section className="hero-banner">
        <h1>Jan Manders</h1>
        <p>Data Engineering & Analytics | Reliable Pipelines • Actionable Dashboards</p>
      </section>
      <header>
        <nav>
          <Link to="/">About</Link> | <Link to="/dashboard">Projects</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App
