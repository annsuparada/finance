import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/Organism/NavBar'
import InvestingPage from './pages/InvestingPage'
import CalculatorPage from './pages/CalculatorPage'
import Footer from './components/Organism/Footer'
import Article from './pages/ArticlePage'
import Layout from './components/Layout'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Layout>
          <Routes>
            <Route path="/" element={<InvestingPage />} />
            <Route path="/investing" element={<InvestingPage />} />
            <Route path="/investing/:slug" element={<Article />} />
            <Route path="/calculator" element={<CalculatorPage />} />
          </Routes>
        </Layout>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
