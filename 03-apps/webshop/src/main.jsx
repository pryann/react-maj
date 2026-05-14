import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ShoppingCartView from './views/ShoppingCartView.jsx'
import { CartProvider } from './features/cart'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/cart" element={<ShoppingCartView />} />
                </Routes>
            </CartProvider>
        </BrowserRouter>
    </StrictMode>,
)
