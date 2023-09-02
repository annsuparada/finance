import React from 'react'
import { Box, CircularProgress } from '@mui/material'

const Loading: React.FC = () => {
  const styles = {
    box: {
      display: 'flex',
      justifyContent: 'center',
      margin: '2rem',
    },
  }
  return (
    <Box sx={styles.box}>
      <CircularProgress />
    </Box>
  )
}

export default Loading
