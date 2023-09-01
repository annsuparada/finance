import React, { useEffect } from 'react'
import Articles from '../components/Articles'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchArticles } from '../store/actions/articleActions'

const InvestingPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const articles = useAppSelector((state) => state.articles.articles)
  const loading = useAppSelector((state) => state.articles.loading)
  useEffect(() => {
    dispatch(fetchArticles() as any)
  }, [dispatch])

  return (
    <div>
      <Articles articles={articles} loading={loading} />
    </div>
  )
}

export default InvestingPage
