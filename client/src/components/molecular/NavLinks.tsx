import React, { useEffect } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { Link, useLocation } from 'react-router-dom'
import { secondary } from '../../theme'

const defaultPage = 'investing'

const NavLinks: React.FC = () => {
  const [value, setValue] = React.useState(defaultPage)
  const location = useLocation()
  const currentLocation = location.pathname

  useEffect(() => {
    if (currentLocation === '/') {
      setValue(defaultPage)
    }
  }, [currentLocation])

  const styles = {
    tab: {
      color: secondary,
      '&.Mui-selected': {
        fontWeight: 'bold',
      },
    },
    link: {
      color: secondary,
      textDecoration: 'none',
    },
  }

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%', margin: '0 auto' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab
          value="investing"
          label={
            <Link to="/investing" style={styles.link}>
              INVESTING
            </Link>
          }
          sx={styles.tab}
        />
        <Tab
          value="calculator"
          label={
            <Link to="/calculator" style={styles.link}>
              CALCULATOR
            </Link>
          }
          sx={styles.tab}
        />
      </Tabs>
    </Box>
  )
}

export default NavLinks
