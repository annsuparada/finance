import { useMediaQuery } from '@mui/material'
import React from 'react'
import { mobileView, tabletView } from '../../theme'
import SmallCard from './SmallCard'

interface SmallCardListProps {
  articles: Article[]
  wrapperWidth?: string
  numberOfColumn?: number
  tabletViewColumn?: number
  mobileViewColumn?: number
}
const SmallCardList: React.FC<SmallCardListProps> = ({
  articles,
  numberOfColumn,
  wrapperWidth,
  tabletViewColumn,
  mobileViewColumn,
}) => {
  const isTablet = useMediaQuery(`(max-width:${tabletView})`)
  const isMoblie = useMediaQuery(`(max-width:${mobileView})`)
  const column = isMoblie
    ? mobileViewColumn
    : isTablet
    ? tabletViewColumn
    : numberOfColumn
  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: `repeat(${column}, 1fr)`,
      gap: '1.5rem',
    },
    wrapper: {
      maxWidth: wrapperWidth,
      margin: '0 auto',
    },
  }
  return (
    <div style={styles.wrapper}>
      <div style={styles.grid}>
        {articles.map((item, index) => (
          <SmallCard
            key={item.id}
            id={item.id}
            alt={item.alt}
            title={item.title}
            imageURL={item.imageURL}
            articleContent={item.articleContent}
            slug={item.slug}
            intro={item.intro}
          />
        ))}
      </div>
    </div>
  )
}

SmallCardList.defaultProps = {
  numberOfColumn: 4,
  tabletViewColumn: 2,
  mobileViewColumn: 1,
  wrapperWidth: '1280px',
}
export default SmallCardList
