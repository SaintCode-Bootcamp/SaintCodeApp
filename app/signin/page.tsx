import Image from 'next/image';
import GitAuthButton from '../components/GitAuthButton/GitAuthButton';
import s from './signin.module.scss';
import cn from '@/shared/lib/cn/cn';
import samurai from './assets/svg/samurai.svg';
import logo from './assets/svg/logo.svg';

const SignIn = async () => (
  <div className={cn(s.si__background)}>
    <div className={cn(s.si__logo)}>
      <Image src={samurai} alt="" className={cn(s.si__samurai)} />
      <Image src={logo} alt="" className={cn(s.si__title)} />
    </div>
    <div className={cn(s.si__buttons)}>
      <GitAuthButton />
    </div>
  </div>
);

export default SignIn;
