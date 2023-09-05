import s from './Button.module.scss';
import cn from '@/shared/lib/cn/cn';
import React from 'react';

interface ButtonProps {
  text: string;
  handler?: () => void;
  checkBtn?: any;
  wrongBtn?: any;
}


function Button(props: ButtonProps) {
  const { text, handler, checkBtn, wrongBtn } = props;

  const innerClassName = cn(s.btn, {
    [s.btn__check]: checkBtn,
    [s.btn__wrong]: wrongBtn,
  });

  return (
    <button onClick={handler} className={innerClassName}>
      {text}
    </button>
  );
}

export default Button;