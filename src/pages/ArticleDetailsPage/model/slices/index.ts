import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsPageRecomendationsReducer } from './articleDetailsPageRecomendationsSlice';
import { articleDetailsCommentsReducer } from './ArticleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recomendations: articleDetailsPageRecomendationsReducer,
  comments: articleDetailsCommentsReducer,
});
