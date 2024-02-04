import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { t } = useTranslation();
  const { className, value, onChange, readonly } = props;
  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  const listBoxProps = {
    readonly,
    className,
    value,
    items: options,
    defaultValue: t('Укажите валюту'),
    label: t('Укажите валюту'),
    onChange: onChangeHandler,
    direction: "top right" as const
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={<ListBox {...listBoxProps} />}
      off={<ListBoxDeprecated {...listBoxProps}/>}
    />
  );
});
