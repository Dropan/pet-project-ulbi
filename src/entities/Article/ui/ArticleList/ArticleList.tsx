import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
// import { PAGE_ID } from '@/widgets/Page/Page';
import { Article } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleView } from '../../model/consts/articleConsts';
import { ToggleFeatures } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton key={index} className={cls.card} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
    target,
  } = props;
  const { t } = useTranslation('article-details');

  if (!isLoading && !articles.length) {
    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <HStack
          gap="16"
          wrap="wrap"
          className={classNames(cls.ArticleListRedesigned, {}, [])}
          data-testid="ArticleList"
        >
          {articles.map((item) => (
            <ArticleListItem
              article={item}
              view={view}
              target={target}
              key={item.id}
              className={cls.card}
            />
          ))}
          {isLoading && getSkeletons(view)}
        </HStack>
      }
      off={
        <div
          className={classNames(cls.ArticleListItem, {}, [
            className,
            cls[view],
          ])}
          data-testid="ArticleList"
        >
          {articles.map((item) => (
            <ArticleListItem
              article={item}
              view={view}
              target={target}
              key={item.id}
              className={cls.card}
            />
          ))}
          {isLoading && getSkeletons(view)}
        </div>
      }
    />
  );
});
