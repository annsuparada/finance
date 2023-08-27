import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

const NavLinks: React.FC = () => {
  const [value, setValue] = React.useState('investing')

  const styles = {
    tab: {
      color: 'white',
      '&.Mui-selected': {
        fontWeight: 'bold',
      },
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
        <Tab value="investing" label="INVESTING" sx={styles.tab} />
        <Tab value="calculator" label="CALCULATOR" sx={styles.tab} />
      </Tabs>
    </Box>
  )
}

export default NavLinks
