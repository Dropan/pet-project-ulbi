import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/consts/articleConsts';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { toggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    const mainClass = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => cls.ArticleListRedesigned,
      off: () => cls.ArticleList,
    });

    const Skeleton = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => SkeletonRedesigned,
      off: () => SkeletonDeprecated,
    });

    const Card = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => CardRedesigned,
      off: () => CardDeprecated,
    });

    if (view === ArticleView.BIG) {
      return (
        <div className={classNames(mainClass, {}, [className, cls[view]])}>
          <Card className={cls.card}>
            <div className={cls.header}>
              <Skeleton border="50%" width={30} height={30} />
              <Skeleton width={150} height={16} className={cls.userName} />
              <Skeleton width={150} height={16} className={cls.date} />
            </div>
            <Skeleton width={250} height={24} className={cls.title} />
            <Skeleton height={200} className={cls.img} />
            <div className={cls.footer}>
              <Skeleton width={200} height={36} className={cls.img} />
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div className={classNames(mainClass, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.imageWrapper}>
            <Skeleton width={200} height={200} className={cls.img} />
          </div>
          <div className={cls.infoWrapper}>
            <Skeleton width={130} height={16} className={cls.img} />
          </div>
          <Skeleton width={150} height={16} className={cls.img} />
        </Card>
      </div>
    );
  },
);
