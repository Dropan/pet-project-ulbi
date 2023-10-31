import { createSelector } from '@reduxjs/toolkit';
import { getUserAthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/Vector.svg';
import AboutIcon from '@/shared/assets/icons/clarity_list-outline-badged.svg';
import ProfileIcon from '@/shared/assets/icons/Profile.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import { SidebarItemType } from '../types/sidebar';
import {
  getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/const/router';

export const getSidebarItems = createSelector(
  getUserAthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: getRouteMain(),
        Icon: MainIcon,
        text: 'Главная',
      },
      {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'О сайте',
      },

    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: getRouteProfile(userData.id),
          Icon: ProfileIcon,
          text: 'Профиль',
          authOnly: true,
        },
        {
          path: getRouteArticles(),
          Icon: ArticlesIcon,
          text: 'Статьи',
          authOnly: true,
        },
      );
    }

    return sidebarItemsList;
  },
);
