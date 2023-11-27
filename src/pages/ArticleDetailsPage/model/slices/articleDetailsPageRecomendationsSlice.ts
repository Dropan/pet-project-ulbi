import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { ArticleDetailsRecomendationsSchema } from '../types/ArticleDetailsRecomendationsSchema';
import { fetchArticleRecomendations } from '../services/fetchArticleRecomendations/fetchArticleRecomendations';

const recomendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticlesRecomendations =
  recomendationsAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleDetailsPage?.recomendations ||
      recomendationsAdapter.getInitialState(),
  );

const articleDetailsPageRecomendationsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState:
    recomendationsAdapter.getInitialState<ArticleDetailsRecomendationsSchema>({
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {},
    }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecomendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecomendations.fulfilled, (state, action) => {
        state.isLoading = false;
        recomendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecomendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsPageRecomendationsReducer } =
  articleDetailsPageRecomendationsSlice;
