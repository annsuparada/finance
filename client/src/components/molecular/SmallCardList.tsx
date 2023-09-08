import React from 'react'
import SmallCard from './SmallCard'

interface SmallCardListProps {
  articles: Article[]
  numberOfColumn?: number
  wrapperWidth?: string
}
const SmallCardList: React.FC<SmallCardListProps> = ({
  articles,
  numberOfColumn,
  wrapperWidth,
}) => {
  const column = numberOfColumn || 4
  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: `repeat(${column}, 1fr)`,
      gap: '1.5rem',
    },
    wrapper: {
      maxWidth: wrapperWidth || '1280px',
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
          />
        ))}
      </div>
    </div>
  )
}

export default SmallCardList
