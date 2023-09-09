import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, TextField, useMediaQuery } from '@mui/material'
import { mobleView, primary, secondary } from '../../theme'
import SocialMediaLinks from '../molecular/SocialMediaLinks'
import NavLinks from '../molecular/NavLinks'

const NavBar: React.FC = () => {
  const isMobile = useMediaQuery(`(max-width:${mobleView})`)
  console.log('isMobile', isMobile)
  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      minHeight: '100px',
      backgroundColor: primary,
    },
    icons: {
      padding: '10px',
      justifySelf: isMobile ? 'center' : 'start',
    },
    searchBar: {
      justifySelf: 'end',
      width: isMobile ? '100%' : '80%',
    },
    logo: {
      margin: 'auto auto',
    },
    inputProps: {
      backgroundColor: secondary,
      color: primary,
      margin: '5px',
      width: '100%',
    },
    searchBarBorder: {
      border: `1px solid ${secondary}`,
      borderRadius: '4px',
      margin: '10px',
    },
    searchGrid: {
      display: 'grid',
      gridTemplateColumns: '5fr 1fr',
    },
    searchIcon: {
      fontSize: '35px',
      marginTop: '6px',
    },
    navLinks: {
      display: 'grid',
      justifyContent: 'center',
      backgroundColor: primary,
      borderTop: `1px solid rgba(255, 255, 255, 0.5)`,
      borderBottom: `1px solid rgba(255, 255, 255, 0.5)`,
      padding: '7px',
    },
  }

  const handleSearch = (event: any) => {
    // Handle the search logic here
    const searchTerm = event.target.value
    console.log('Search term:', searchTerm)
  }
  return (
    <div>
      <div style={styles.grid}>
        <div style={styles.icons}>
          <SocialMediaLinks />
        </div>
        <div style={styles.logo}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 style={{ color: secondary }}>Finance Something</h1>
          </Link>
        </div>
        <div style={styles.searchBar}>
          <div style={styles.searchBarBorder}>
            <div style={styles.searchGrid}>
              <TextField
                color="secondary"
                fullWidth={true}
                size="small"
                placeholder="Search..."
                onChange={handleSearch}
                InputProps={{
                  style: styles.inputProps,
                }}
              />
              <IconButton aria-label="search">
                <SearchIcon color="secondary" style={styles.searchIcon} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.navLinks}>
        <NavLinks />
      </div>
    </div>
  )
}

export default NavBar
