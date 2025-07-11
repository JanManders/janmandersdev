// main.tsx
// Entry point for the React app.
// Mounts the <App /> component into the root DOM element and wraps it in <StrictMode>.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
