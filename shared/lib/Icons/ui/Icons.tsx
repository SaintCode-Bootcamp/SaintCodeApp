import React from 'react';
import IconName from '../IconsEnum';

/* eslint-disable */

interface IconProps {
  className?: string;
  name: IconName;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ className, name, size, color }) => {
  const iconData = require(`../assets/icons/${name}.svg`).default;

  // Проверяем, есть ли у объекта атрибут "src"
  const iconPath = iconData && iconData.src ? iconData.src : '';

  return (
    <img
      className={className}
      src={iconPath}
      alt={`${name} icon`}
      width={size}
      height={size}
      style={{ fill: color }}
    />
  );
};

export default Icon;
