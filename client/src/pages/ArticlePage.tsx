import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/atom/Loading'
import ImageHeader from '../components/atom/ImageHeader'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchArticleBySlug } from '../store/actions/articleActions'

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

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1>{slug}</h1>
          <ImageHeader imageURL={article?.imageURL} alt={article?.alt} />
        </div>
      )}
    </div>
  )
}

export default Article
