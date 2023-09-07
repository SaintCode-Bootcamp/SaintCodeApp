import cn from '@/shared/lib/cn/cn';
import s from '@/app/components/Text/Text.module.scss';

function Header() {
  return (
    <p className={cn(s.ac__text)}>
      В данном случае JavaScript видит, что мы пытаемся выполнить недопустимую
      для строк, но допустимую для <span>чисел</span> операцию.
    </p>
  );
}

export default Header;
