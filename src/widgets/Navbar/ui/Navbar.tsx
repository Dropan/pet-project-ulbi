/* eslint-disable react/jsx-no-undef */
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUserName';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationButton } from '@/features/notificationButton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import cls from './Navbar.module.scss';
import { getRouteArticlesCreate } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
    <ToggleFeatures
      feature='isAppRedesigned'
      off={(
        <header className={classNames(cls.Navbar, {}, [className])}>
          <Text className={cls.appName} title="LOGO" theme={TextTheme.INVERTED} />
          <AppLink theme={AppLinkTheme.SECONDARY} to={getRouteArticlesCreate()}>
            {t('Создать статью')}
          </AppLink>
          <HStack gap="16" className={cls.actions}>
            <NotificationButton />
            <AvatarDropdown />
          </HStack>
        </header>
      )}
      on={(
        <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
          <HStack gap="16" className={cls.actions}>
            <NotificationButton />
            <AvatarDropdown />
          </HStack>
        </header>
        )}
    />
      
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  );
});
