import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, TextField } from '@mui/material'
import { primary, secondary } from '../../theme'
import SocialMediaLinks from './SocialMediaLinks'
import NavLinks from './NavLinks'

const NavBar: React.FC = () => {
  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      height: '150px',
      backgroundColor: primary,
    },
    icons: {
      padding: '10px',
    },
    searchBar: {
      justifySelf: 'end',
      padding: '10px 10px 0 0',
    },
    logo: {
      margin: 'auto auto',
    },
    inputProps: {
      backgroundColor: secondary,
      color: primary,
      margin: '5px',
      width: '300px',
    },
    searchBarBorder: {
      border: `1px solid ${secondary}`,
      borderRadius: '4px',
    },
    searchIcon: {
      fontSize: '35px',
      marginTop: '6px',
    },
    navLinks: {
      gridColumn: '1/4',
      justifySelf: 'center',
    },
  }

  const handleSearch = (event: any) => {
    // Handle the search logic here
    const searchTerm = event.target.value
    console.log('Search term:', searchTerm)
  }
  return (
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
          <TextField
            variant="filled"
            color="secondary"
            focused
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
      <div style={styles.navLinks}>
        <NavLinks />
      </div>
    </div>
  )
}

export default NavBar
