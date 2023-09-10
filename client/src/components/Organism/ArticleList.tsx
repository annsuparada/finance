import { useMediaQuery } from '@mui/material'
import React from 'react'
import { desktopView, mobileView, primary, tabletView } from '../../theme'
import Loading from '../atom/Loading'
import BigCard from '../molecular/BigCard'
import SmallCard from '../molecular/SmallCard'

interface ArticlesProps {
  articles: Article[]
  loading: boolean
}

const Articles: React.FC<ArticlesProps> = ({ articles, loading }) => {
  const isMobile = useMediaQuery(`(max-width:${mobileView})`)
  const isTablet = useMediaQuery(`(max-width:${tabletView})`)
  const isDesktop = useMediaQuery(`(max-width:${desktopView})`)

  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile
        ? '1fr'
        : isTablet
        ? 'repeat(2, 1fr)'
        : 'repeat(4, 1fr)',
      gap: '1.5rem',
      padding: isDesktop ? '7px' : '0',
    },
    item1: {
      gridRow: isMobile ? '1' : '1 / span 2',
      gridColumn: isMobile ? '1' : '1 / span 2',
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
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div style={styles.divider}>
            <h1 style={styles.heading}>Investing</h1>
          </div>

          <div style={styles.grid}>
            {articles.map((item, index) => (
              <React.Fragment key={item.id}>
                {item.slug === 'what-is-a-roth-ira-1' ? (
                  <div style={styles.item1}>
                    <BigCard
                      id={item.id}
                      alt={item.alt}
                      title={item.title}
                      imageURL={item.imageURL}
                      articleContent={item.articleContent}
                      slug={item.slug}
                      intro={item.intro}
                    />
                  </div>
                ) : (
                  <SmallCard
                    id={item.id}
                    alt={item.alt}
                    title={item.title}
                    imageURL={item.imageURL}
                    articleContent={item.articleContent}
                    slug={item.slug}
                    intro={item.intro}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          <div style={styles.divider}>
            <h1 style={styles.heading}>Latest</h1>
          </div>
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
      )}
    </>
  )
}

export default Articles
