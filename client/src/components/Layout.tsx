import React, { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const styles = {
    container: {
      minHeight: '58vh',
      maxWidth: '1250px',
      margin: '0 auto',
    },
  }
  return <div style={styles.container}>{children}</div>
}

export default Layout
