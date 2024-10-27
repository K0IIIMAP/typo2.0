import NextAuth, { , NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials"

const config = {
  pages: {
    signIn: "/log-in",
  },
  providers: [
    Credentials({
        async authorize(credential){
           // runs on every login 
        }
    })
  ],
  callbacks: {
    authorized: ({ request }) => {
        // runs on every request with middleware
      const isTryingToAccessApp =
        request.nextUrl.pathname.includes("mode") ||
        request.nextUrl.pathname.includes("challenge");
      if (isTryingToAccessApp) return false;
      return true;
    },
  },
} satisfies NextAuthConfig;

export const { auth, signIn } = NextAuth(config);