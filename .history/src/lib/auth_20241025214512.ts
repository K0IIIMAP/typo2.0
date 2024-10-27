import NextAuth from "next-auth";

export const { auth } = NextAuth({
  pages: {
    signIn: "/log-in",
  },
});
