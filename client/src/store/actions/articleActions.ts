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
