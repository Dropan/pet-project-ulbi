import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const main = 'Главная';
const about = 'О сайте';

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
        {main}
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        {about}
      </AppLink>
    </div>
  </div>
);
