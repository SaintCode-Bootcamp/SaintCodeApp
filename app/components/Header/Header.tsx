import cn from '@/shared/lib/cn/cn';
import s from '@/app/components/Header/Header.module.scss';

function Header() {
  return (
    <h1 className={cn(s.ac__title)}>
      <span>Автоматическое</span> преобразование типов данных
    </h1>
  );
}

export default Header;
