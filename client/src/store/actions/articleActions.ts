import { createAsyncThunk } from '@reduxjs/toolkit'
import { articles } from '../../dummyData'

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async (_, { rejectWithValue }) => {
    try {
      // fetch dummuy data
      const response = articles
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const fetchArticleBySlug = createAsyncThunk(
  'articles/fetchArticleBySlug',
  async (slug: string, { rejectWithValue }) => {
    try {
      // const response = await axios.get(`/api/articles/${slug}`)
      // return response

      // fetch dummuy data
      let response = articles
      let article
      if (typeof slug === 'string') {
        article = response.find((item) => item.slug === slug)
      }
      return article
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
