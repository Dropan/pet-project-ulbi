import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
  clickable?: false;
}

interface ClickableIconProps extends IconBaseProps {
  clickable: true;
  onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableIconProps;

export const Icon = (props: IconProps) => {
  const { className, Svg, width = 32, height = 32, clickable, ...otherProps } = props;

  const icon = (
    <Svg
      className={classNames(cls.Icon, {}, [
        className,
      ])}
      width={width} 
      height={height}
      onClick={undefined}
      {...otherProps}
    />
  )

  if (clickable) {
    return (
      <button
        className={cls.button}
        type='button'
        onClick={props.onClick}
        style={{ height, width }}
      >
        {icon}
      </button>
    )
  }

  return icon;
};
