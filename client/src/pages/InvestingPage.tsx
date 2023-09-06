import React, { useEffect } from 'react'
import MainWrapper from '../components/atom/MainWrapper'
import ArticleList from '../components/Organism/ArticleList'
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
    <MainWrapper>
      <ArticleList articles={articles} loading={loading} />
    </MainWrapper>
  )
}

export default InvestingPage
