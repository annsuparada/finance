import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'
import './App.css'
import NavBar from './components/Navigation/NavBar'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <NavBar />
      </header>
    </ThemeProvider>
  )
}

export default App
