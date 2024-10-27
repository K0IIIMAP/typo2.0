import NextAuth, { NextAuthConfig } from "next-auth";

const config = {
  pages: {
    signIn: "/log-in",
  },
  providers: [],
  callbacks: {},
} satisfies NextAuthConfig;

export const { auth } = NextAuth(config);
