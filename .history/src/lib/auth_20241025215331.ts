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
    },
  },
} satisfies NextAuthConfig;

export const { auth } = NextAuth(config);
