import { createSlice } from '@reduxjs/toolkit'
import { fetchArticleBySlug, fetchArticles } from '../actions/articleActions'

interface ArticleState {
  articles: Article[]
  article: Article | undefined
  loading: boolean
  error?: string
}

const initialState: ArticleState = {
  articles: [],
  article: {
    id: '',
    title: '',
    imageURL: '',
    alt: '',
    articleContent: '',
    slug: '',
  },
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
      .addCase(fetchArticleBySlug.pending, (state) => {
        state.loading = true
        state.error = ''
      })
      .addCase(fetchArticleBySlug.fulfilled, (state, action) => {
        state.loading = false
        state.article = action.payload
      })
      .addCase(fetchArticleBySlug.rejected, (state, action) => {
        state.loading = false
        state.error =
          typeof action.payload === 'string'
            ? action.payload
            : 'An error occurred'
      })
  },
})

export { fetchArticles, fetchArticleBySlug }
export default articlesSlice.reducer
