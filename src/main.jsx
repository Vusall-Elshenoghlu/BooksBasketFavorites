import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import FavoritesProvider from './context/favoritesContext.jsx'
import BasketProvider from './context/BasketConext.jsx'

createRoot(document.getElementById('root')).render(
    <BasketProvider>
        <FavoritesProvider>
            <App />
        </FavoritesProvider>
    </BasketProvider>
)
