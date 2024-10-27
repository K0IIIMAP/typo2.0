import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
const config = {
  pages: {
    signIn: "/log-in",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        // runs on every login
        const { email, password } = credentials;
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        // check if there is a user with an email in db
        if (!user) {
          console.log("no user found in database");
          return null;
        }
        // check if their pswrd match
        const passwordsMatch = await bcrypt.compare(
          password,
          user.hashedPassword
        );
        if (!passwordsMatch) {
          console.log("passwords dont match");
          return null;
        }
        redirect("/account");
        return user;
      },
    }),
  ],
  callbacks: {
    authorized: ({ auth, request }) => {
      const isLoggedIn = Boolean(auth?.user);
      // runs on every request with middleware
      const isTryingToAccessApp =
        request.nextUrl.pathname.includes("mode") ||
        request.nextUrl.pathname.includes("challenge");
      const isTryingToAccessLogin = request.nextUrl.pathname.includes("log-in");
      if (isTryingToAccessApp && !isLoggedIn) return false;
      if (isTryingToAccessLogin && isLoggedIn) {
        return NextResponse.redirect(new URL("/account", request.url));
      }
      return true;
    },
  },
} satisfies NextAuthConfig;

export const { auth, signIn, signOut } = NextAuth(config);
