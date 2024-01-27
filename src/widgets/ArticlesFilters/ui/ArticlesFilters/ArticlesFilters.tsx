import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { ArticleSortField, ArticleType } from "@/entities/Article";
import { ArticleSortSelector } from "@/features/ArticleSortSelector";
import { ArticleTypeTabs } from "@/features/ArticleTypeTabs";
import { SortOrder } from "@/shared/types/sort";
import { Card } from "@/shared/ui/redesigned/Card";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticlesFilters.modules.scss";
import { Input } from "@/shared/ui/redesigned/Input";

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  type: ArticleType;
  search: string;
  onChangeType: (type: ArticleType) => void;
  onChangeSearch: (value: string) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
  const {
    className,
    sort,
    order,
    onChangeSort,
    onChangeOrder,
    type,
    search,
    onChangeType,
    onChangeSearch,
  } = props;
  const {t} = useTranslation();

  return (
    <Card className={classNames(cls.ArticlesFilters, {}, [className])} paddings="24">
      <VStack gap="32">
        <Input
          placeholder={t('Поиск')}
          value={search}
          onChange={onChangeSearch}
        />
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleTypeTabs
          value={type}
          onChangeType={onChangeType}
          // className={cls.tabs}
        />
      </VStack>
    </Card>
  )
})
