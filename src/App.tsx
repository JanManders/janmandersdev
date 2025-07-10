import './App.css'

function App() {
  return (
    <div>
      <header style={{ padding: '1rem', backgroundColor: '#f5f5f5' }}>
        <h1>Jan Manders</h1>
        <nav>
          <a href="/">Home</a> | <a href="/dashboard">Dashboard</a>
        </nav>
      </header>
      <main style={{ padding: '2rem' }}>
        <h2>Welcome to My Portfolio</h2>
        <p>I’m a data engineer with a passion for clean infrastructure, insightful analytics, and reliable pipelines.</p>
      </main>
    </div>
  )
}

export default App

