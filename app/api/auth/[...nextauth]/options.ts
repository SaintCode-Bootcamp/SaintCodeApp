import type { AuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const options: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GH_CLIENT_ID as string,
      clientSecret: process.env.GH_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    // async jwt({ token, account, profile }) {
    //   if (account) {
    //     token.accessToken = account.access_token;
    //     token.id = profile.id;
    //   }
    //   return token;
    // },
    // async session({ session, token }) {
    //   session.accessToken = token.accessToken;
    //   session.user.id = token.id;

    //   return session;
    // },
  },
  pages: {
    // login: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default options;
