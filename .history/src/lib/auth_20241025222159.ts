import NextAuth, { , NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials"

const config = {
  pages: {
    signIn: "/log-in",
  },
  providers: [
    Credentials
  ],
  callbacks: {
    authorized: ({ request }) => {
      const isTryingToAccessApp =
        request.nextUrl.pathname.includes("mode") ||
        request.nextUrl.pathname.includes("challenge");
      if (isTryingToAccessApp) return false;
      return true;
    },
  },
} satisfies NextAuthConfig;

export const { auth, signIn } = NextAuth(config);
