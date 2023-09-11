import React, { ReactNode } from 'react'

interface HeaderWrapperProps {
  children: ReactNode
}
const MainWrapper: React.FC<HeaderWrapperProps> = ({ children }) => {
  const styles = {
    container: {
      minHeight: '58vh',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '1.5rem',
    },
  }
  return <div style={styles.container}>{children}</div>
}

export default MainWrapper
