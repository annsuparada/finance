import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Link } from '@mui/material'

const SocialMediaLinks: React.FC = () => {
  const styles = {
    icon: {
      padding: '2px',
    },
  }
  return (
    <>
      <Link href="#" rel="noopener noreferrer">
        <FacebookIcon color="secondary" style={styles.icon} />
      </Link>
      <Link href="#" target="_blank" rel="noopener noreferrer">
        <InstagramIcon color="secondary" style={styles.icon} />
      </Link>
      <Link href="#" target="_blank" rel="noopener noreferrer">
        <TwitterIcon color="secondary" style={styles.icon} />
      </Link>
      <Link href="#" target="_blank" rel="noopener noreferrer">
        <YouTubeIcon color="secondary" style={styles.icon} />
      </Link>
    </>
  )
}

export default SocialMediaLinks
