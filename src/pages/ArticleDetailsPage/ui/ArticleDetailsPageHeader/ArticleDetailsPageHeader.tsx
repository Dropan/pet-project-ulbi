import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getArticleDetailsData } from '@/entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import { getRouteArticles, getRouteArticlesEdit } from '@/shared/const/router';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = (
  props: ArticleDetailsPageHeaderProps,
) => {
  const { className } = props;
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(getRouteArticles());
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticlesEdit(article?.id));
    }
  }, [article, navigate]);

  return (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
        {t<string>('Назад')}
      </Button>
      {canEdit && (
        <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
          {t<string>('Редактировать')}
        </Button>
      )}
    </HStack>
  );
};
