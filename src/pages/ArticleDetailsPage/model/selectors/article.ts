import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from 'entities/Article';
import { getUserAthData } from 'entities/User';

export const getCanEditArticle = createSelector(
  getArticleDetailsData,
  getUserAthData,
  (article, user) => {
    if (!article || !user) {
      return false;
    }

    return article.user.id === user.id;
  },
);
