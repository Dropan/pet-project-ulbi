import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

export const AdminPanelPage = () => {
  const { t } = useTranslation();

  return <Page data-testid="AdminPanelPage">{t('Админ панель')}</Page>;
};
