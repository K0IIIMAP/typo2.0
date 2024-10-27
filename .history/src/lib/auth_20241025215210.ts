import NextAuth, { NextAuthConfig } from "next-auth";

const config = {
  pages: {
    signIn: "/log-in",
  },
  providers: [],
  callbacks: {
    authorized: ({ request }) => {
      return false;
    },
  },
} satisfies NextAuthConfig;

export const { auth } = NextAuth(config);
