import { createSlice } from '@reduxjs/toolkit'
import { fetchArticles } from '../actions/articleActions'

interface ArticleState {
  articles: Article[]
  loading: boolean
  error?: string
}

const initialState: ArticleState = {
  articles: [],
  loading: false,
  error: '',
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {}, // You can define other non-async actions here if needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true
        state.error = ''
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false
        state.articles = action.payload.map((item) => ({
          id: item.id.toString(),
          title: item.title,
          imageURL: item.imageURL,
          alt: item.alt,
          slug: item.slug,
          articleContent: item.articleContent,
        }))
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false
        console.log('error', action.payload)
        state.error =
          typeof action.payload === 'string'
            ? action.payload
            : 'An error occurred'
      })
  },
})

export { fetchArticles }
export default articlesSlice.reducer
