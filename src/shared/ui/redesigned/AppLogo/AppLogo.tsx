import React, { memo } from 'react';
import cls from './AppLogo.module.scss';
import AppSvg from '@/shared/assets/icons/app-image.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../../redesigned/Stack';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => (
  <HStack
      max
      justify="center"
      className={classNames(cls.appLogoWrapper, {}, [className])}
  >
    <AppSvg 
        className={cls.appLogo}
        width={size}
        height={size}
        color='black'
      />
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
  </HStack>
));
