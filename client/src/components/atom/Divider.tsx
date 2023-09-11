import React from 'react'
import { primary } from '../../theme'

interface DividerProps {
  text: string
  fontSize?: string
  color?: string
}
const Divider: React.FC<DividerProps> = ({ text, fontSize, color }) => {
  const styles = {
    divider: {
      width: '100%',
      borderBottom: `2px solid ${color}`,
      margin: '30px 0 25px 0',
    },
    heading: {
      margin: 0,
      fontSize: fontSize,
    },
  }
  return (
    <div style={styles.divider}>
      <h2 style={styles.heading}>{text}</h2>
    </div>
  )
}

Divider.defaultProps = {
  fontSize: '45px',
  color: primary,
}

export default Divider
