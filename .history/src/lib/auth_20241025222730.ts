import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./db";

const config = {
  pages: {
    signIn: "/log-in",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        // runs on every login
        const { email, password } = credentials;
        const user = prisma.user.findUnique({
          where: {
            email,
          },
        });
        if (!user) {
          console.log("no user found in database");
        }
      },
    }),
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
