import { useTheme } from 'app/providers/ThemeProvider';
import { ReactNode, memo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
  clasName?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    clasName,
    children,
    isOpen,
    onClose,
  } = props;

  const { theme } = useTheme();

  const mods: Mods = {
    [cls.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [clasName, theme, 'app_drawer'])}>
        <Overlay onClick={onClose} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
});
