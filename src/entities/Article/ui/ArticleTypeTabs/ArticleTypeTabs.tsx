import { memo, useCallback, useMemo } from 'react';
import { t } from 'i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/consts/articleConsts';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const {
    className, value, onChangeType,
  } = props;

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t<string>('Все'),
    },
    {
      value: ArticleType.IT,
      content: t<string>('Айти'),
    },
    {
      value: ArticleType.ECONOMICS,
      content: t<string>('Экономика'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t<string>('Наука'),
    },
  ], []);

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType);
  }, [onChangeType]);

  return (
    <Tabs
      className={classNames('', {}, [className])}
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
    />
  );
});
