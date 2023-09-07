import { ArticleView } from '@/entities/Article/model/consts/articleConsts';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const { className, view } = props;

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Skeleton
              border="50%"
              width={30}
              height={30}
            />
            <Skeleton
              width={150}
              height={16}
              className={cls.userName}
            />
            <Skeleton
              width={150}
              height={16}
              className={cls.date}
            />
          </div>
          <Skeleton
            width={250}
            height={24}
            className={cls.title}
          />
          <Skeleton
            height={200}
            className={cls.img}
          />
          <div className={cls.footer}>
            <Skeleton
              width={200}
              height={36}
              className={cls.img}
            />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <Skeleton
            width={200}
            height={200}
            className={cls.img}
          />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton
            width={130}
            height={16}
            className={cls.img}
          />
        </div>
        <Skeleton
          width={150}
          height={16}
          className={cls.img}
        />
      </Card>
    </div>
  );
});
