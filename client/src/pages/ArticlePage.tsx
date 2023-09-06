import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/atom/Loading'
import ImageHeader from '../components/atom/ImageHeader'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchArticleBySlug } from '../store/actions/articleActions'
import HeaderWrapper from '../components/atom/HeaderWeapper'
import { secondary } from '../theme'
import MainWrapper from '../components/atom/MainWrapper'

const Article: React.FC = () => {
  const { slug } = useParams()
  const dispatch = useAppDispatch()
  const article = useAppSelector((state) => state.articles.article)
  const loading = useAppSelector((state) => state.articles.loading)

  useEffect(() => {
    if (slug) {
      dispatch(fetchArticleBySlug(slug) as any)
    }
  }, [dispatch, slug])

  const styles = {
    title: {
      margin: '3rem 0 3rem 0',
      fontSize: '3rem',
      color: `${secondary}`,
    },
    titleWraper: {
      width: '1280px',
      margin: '0 auto',
    },
    p: {
      fontSize: '28px',
      marginTop: '2rem',
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
          </HeaderWrapper>
          <MainWrapper>
            <p style={styles.p}>{article?.articleContent}</p>
          </MainWrapper>
        </div>
      )}
    </div>
  )
}

export default Article
