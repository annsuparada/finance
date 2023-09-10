import React, { ReactNode } from 'react'
import { primary } from '../../theme'

interface HeaderWrapperProps {
  children: ReactNode
}
const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ children }) => {
  const styles = {
    container: {
      backgroundColor: `${primary}`,
      padding: '4rem 2rem 2rem 2rem',
    },
  }
  return <div style={styles.container}>{children}</div>
}

export default HeaderWrapper
