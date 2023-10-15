import type { DefaultSession, NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

export interface Session {
  user: {
    id: string;
    tokenUsed: number;
    } & DefaultSession["user"];
  };

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string
    })
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
/*   session: {
    jwt: true,
    sessionCallback: async (session, user) => {
      // Get the extra user data.
      const extraData = await getExtraUserData(user);

      // Add the extra user data to the session.
      session.user.extraData = extraData;

      // Return the session.
      return session;
    },
  }, */
}