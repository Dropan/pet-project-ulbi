import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown } from '@/shared/ui/Popups';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import {
  getUserAthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = (props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispath = useDispatch();

  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getUserAthData);

  const onLogOut = useCallback(() => {
    dispath(userActions.logout());
  }, [dispath]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      direction="bottom left"
      items={[
        {
          content: t('Выйти'),
          onClick: onLogOut,
        },
        {
          content: t('Профиль пользователя'),
          href: RoutePath.profile + authData.id,
        },
        ...(isAdminPanelAvailable ? [{
          content: t('Админ панель'),
          href: RoutePath.admin_panel,
        }] : []),
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
    />
  );
};
