/* eslint-disable no-param-reassign */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { AuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const authConfig: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GH_CLIENT_ID!,
      clientSecret: process.env.GH_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.id = token.id;

      return session;
    },
  },
  pages: {
<<<<<<< HEAD
    signIn: '/signin',
=======
    login: '/login',
>>>>>>> 60adfff (sass to ccs)
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default authConfig;
