import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/atom/Loading'
import ImageHeader from '../components/atom/ImageHeader'
import { useAppDispatch, useAppSelector } from '../hooks'
import {
  fetchArticleBySlug,
  fetchArticles,
} from '../store/actions/articleActions'
import HeaderWrapper from '../components/atom/HeaderWeapper'
import { secondary } from '../theme'
import MainWrapper from '../components/atom/MainWrapper'
import SmallCardList from '../components/molecular/SmallCardList'

const Article: React.FC = () => {
  const { slug } = useParams()
  const dispatch = useAppDispatch()
  const article = useAppSelector((state) => state.articles.article)
  const articles = useAppSelector((state) => state.articles.articles)
  const loading = useAppSelector((state) => state.articles.loading)

  useEffect(() => {
    if (slug) {
      dispatch(fetchArticleBySlug(slug) as any)
      dispatch(fetchArticles() as any)
    }
  }, [dispatch, slug])

  const styles = {
    title: {
      margin: '3rem 0 3rem 0',
      fontSize: '3rem',
      color: `${secondary}`,
      textAlign: 'center' as 'center',
    },
    titleWraper: {
      maxWidth: '1280px',
      margin: '0 auto',
    },
    intro: {
      color: `${secondary}`,
      fontSize: '18px',
    },
    introWraper: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center' as 'center',
    },
    p: {
      fontSize: '22px',
    },
    contentWrapper: {
      display: 'grid',
      gridTemplateColumns: '3fr 1fr',
      marginTop: '2rem',
      gap: '3rem',
    },
  }
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <HeaderWrapper>
            <ImageHeader imageURL={article?.imageURL} alt={article?.alt} />
            <div style={styles.titleWraper}>
              <h1 style={styles.title}>{article?.title}</h1>
            </div>
            <div style={styles.introWraper}>
              <p style={styles.intro}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p style={styles.intro}>Ann Keller</p>
              <p style={styles.intro}>April 28, 2023 - 3 minutes</p>
            </div>
          </HeaderWrapper>
          <MainWrapper>
            <div style={styles.contentWrapper}>
              {/* <p style={styles.p}>{article?.articleContent}</p> */}
              <div
                dangerouslySetInnerHTML={{
                  __html: article?.articleContent || '',
                }}
              />
              <SmallCardList articles={articles} numberOfColumn={1} />
            </div>
          </MainWrapper>
        </div>
      )}
    </div>
  )
}

export default Article
