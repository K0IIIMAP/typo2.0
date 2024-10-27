import NextAuth, { NextAuthConfig } from "next-auth";

const config = {
  pages: {
    signIn: "/log-in",
  },
  providers: [],
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
