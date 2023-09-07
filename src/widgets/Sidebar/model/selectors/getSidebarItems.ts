import { createSelector } from '@reduxjs/toolkit';
import { getUserAthData } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import MainIcon from '@/shared/assets/icons/Vector.svg';
import AboutIcon from '@/shared/assets/icons/clarity_list-outline-badged.svg';
import ProfileIcon from '@/shared/assets/icons/Profile.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная',
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О сайте',
      },

    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData.id,
          Icon: ProfileIcon,
          text: 'Профиль',
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          Icon: ArticlesIcon,
          text: 'Статьи',
          authOnly: true,
        },
      );
    }

    return sidebarItemsList;
  },
);
