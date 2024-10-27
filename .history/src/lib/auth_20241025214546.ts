import NextAuth from "next-auth";

export const { auth } = NextAuth(config);

const config = {
  pages: {
    signIn: "/log-in",
  },
};
