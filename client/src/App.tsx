import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navigation/NavBar'
import InvestingPage from './pages/InvestingPage'
import CalculatorPage from './pages/CalculatorPage'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<InvestingPage />} />
          <Route path="/investing" element={<InvestingPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
