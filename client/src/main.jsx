import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './contex/AppContex.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY ='pk_test_ZnVuLXNvbGUtNzEuY2xlcmsuYWNjb3VudHMuZGV2JA'
if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

createRoot(document.getElementById('root')).render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
  <BrowserRouter>
  
  <AppContextProvider>
    <App />
    </AppContextProvider>
  </BrowserRouter>
  </ClerkProvider>
)
