import { useMediaQuery } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  desktopView,
  mobileView,
  primary,
  secondary,
  tabletView,
} from '../../theme'
import SocialMediaLinks from '../molecular/SocialMediaLinks'

const Footer: React.FC = () => {
  const isMobile = useMediaQuery(`(max-width:${mobileView})`)
  const isTablet = useMediaQuery(`(max-width:${tabletView})`)

  const styles = {
    wrapper: {
      backgroundColor: primary,
    },
    grid: {
      maxWidth: desktopView,
      margin: '60px auto 0',
      padding: '3rem',
      backgroundColor: primary,
      minHeight: '25vh',
      flexShrink: 0,
      display: 'grid',
      gridTemplateColumns: isMobile
        ? '1fr'
        : isTablet
        ? '1fr 1fr'
        : 'repeat(3, 1fr)',
    },
    gridItem: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      justifyContent: 'start',
      alignContent: 'start',
    },
    text: {
      color: secondary,
    },
    p: {
      color: secondary,
      fontSize: '16px',
      marginTop: '0',
    },
  }
  return (
    <div style={styles.wrapper}>
      <div style={styles.grid}>
        <div style={styles.gridItem}>
          <h3 style={styles.text}>Sections</h3>
          <Link to="/investing" className="footer-links">
            Investing
          </Link>
          <Link to="/calculator" className="footer-links">
            Calculator
          </Link>
        </div>
        <div style={styles.gridItem}>
          <h3 style={styles.text}>About Us</h3>
          <Link to="/about" className="footer-links">
            About Us
          </Link>
          <Link to="/" className="footer-links">
            Affiliate Disclosure
          </Link>
          <div>
            <SocialMediaLinks />
          </div>
        </div>
        <div style={styles.gridItem}>
          <h3 style={styles.text}>Disclamer</h3>
          <p style={styles.p}>
            The information provided on this website is for educational and
            informational purposes only. It should not be considered financial
            or investment advice. Please conduct your own research and consult
            with a qualified professional before making financial decisions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
