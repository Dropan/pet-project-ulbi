import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/addCommentForm';
import { Suspense, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader/Loader';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleDetailsComments } from '../../model/slices/ArticleDetailsCommentsSlice';
import { addCommentForArcticles } from '../../model/services/addCommentForArcticle/addCommentForArcticles';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';

interface ArticleDetailsCommentsProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleDetailsComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArcticles(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  return (
    <VStack gap="16" max className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('Комментарии')}
      />
      <Suspense fallback={<Loader />}>
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>
      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </VStack>
  );
});
