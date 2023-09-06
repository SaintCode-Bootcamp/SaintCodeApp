export { default } from 'next-auth/middleware';
// в массив добавляем роуты, для которых необходима авторизация
export const config = { matcher: ['/', '/menu', '/tasks/:path*'] };
