import React from 'react'
import { primary } from '../theme'
import BigCard from './BigCard'
import SmallCard from './SmallCard'

const Articles: React.FC = () => {
  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1.5rem',
    },
    item1: {
      gridRow: '1 / span 2',
      gridColumn: '1 / span 2',
      justifySelf: 'stretch',
    },
    divider: {
      width: '100%',
      borderBottom: `2px solid ${primary}`,
      padding: '5px',
      margin: '30px 0 25px 0',
    },
    heading: {
      margin: 0,
      fontSize: '45px',
    },
  }
  return (
    <div>
      <div style={styles.divider}>
        <h1 style={styles.heading}>Investing</h1>
      </div>
      <div style={styles.grid}>
        <div style={styles.item1}>
          <BigCard />
        </div>
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
      <div style={styles.divider}>
        <h1 style={styles.heading}>Latest</h1>
      </div>
      <div style={styles.grid}>
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </div>
  )
}

export default Articles
