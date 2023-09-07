import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign } from '@/shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const {
    className,
    block,
  } = props;
  const { t } = useTranslation('article-details');

  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      <img alt={block.title} src={block.src} className={cls.img} />
      {block.title && (
        <Text text={block.title} align={TextAlign.CENTER} />
      )}
    </div>
  );
});
