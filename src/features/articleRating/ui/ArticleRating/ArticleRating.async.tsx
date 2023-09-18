import { Suspense, lazy } from 'react';
import { ArticleRatingProps } from './ArticleRating';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

const ArticleRatingLazy = lazy(() => (
  import('./ArticleRating').then((module) => ({ default: module.default }))
));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
  <Suspense fallback={<Skeleton width="100%" height={140} />}>
    <ArticleRatingLazy {...props} />
  </Suspense>
);