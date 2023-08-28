import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/navigation/NavBar'
import InvestingPage from './pages/InvestingPage'
import CalculatorPage from './pages/CalculatorPage'
import Footer from './components/footer/Footer'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <div
          style={{ minHeight: '58vh', maxWidth: '1250px', margin: '0 auto' }}
        >
          <Routes>
            <Route path="/" element={<InvestingPage />} />
            <Route path="/investing" element={<InvestingPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
