import React, { ReactNode } from 'react'
import { primary } from '../../theme'

interface HeaderWrapperProps {
  children: ReactNode
}
const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ children }) => {
  const styles = {
    container: {
      width: '100%',
      backgroundColor: `${primary}`,
      padding: '2rem 0 3rem',
    },
  }
  return <div style={styles.container}>{children}</div>
}

export default HeaderWrapper
