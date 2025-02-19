import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SeminarContextProvider } from './seminarContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SeminarContextProvider>
      <App />
    </SeminarContextProvider>
  </StrictMode>,
)
