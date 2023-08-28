import React from 'react'
import { primary, secondary } from '../../theme'

const Footer: React.FC = () => {
  const styles = {
    container: {
      width: '100%',
      marginTop: '60px',
      backgroundColor: primary,
      minHeight: '25vh',
      flexShrink: 0,
    },
    text: {
      color: secondary,
    },
  }
  return (
    <div style={styles.container}>
      <h2 style={styles.text}>Footer</h2>
    </div>
  )
}

export default Footer
