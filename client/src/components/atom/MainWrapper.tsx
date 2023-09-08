import React, { ReactNode } from 'react'

interface HeaderWrapperProps {
  children: ReactNode
}
const MainWrapper: React.FC<HeaderWrapperProps> = ({ children }) => {
  const styles = {
    container: {
      minHeight: '58vh',
      maxWidth: '1250px',
      margin: '0 auto',
    },
  }
  return <div style={styles.container}>{children}</div>
}

export default MainWrapper