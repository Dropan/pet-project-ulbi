import { CSSProperties, useMemo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import UserIcon from '../../../assets/icons/default-avatar.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
  fallbackInverted?: boolean;
}

/**
* Устарел, используем новые из папки redesigned
* @deprecated
*/
export const Avatar = (props: AvatarProps) => {
  const { className, src, alt, size = 100, fallbackInverted } = props;
  const mods: Mods = {};
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );

  const errorFallback = (
    <Icon
      width={size}
      height={size}
      Svg={UserIcon}
      inverted={fallbackInverted}
    />
  );

  const fallback = <Skeleton width={size} height={size} border="50%" />;

  return (
    <AppImage
      alt={alt}
      src={src}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
      errorFallback={errorFallback}
      fallback={fallback}
    />
  );
};
