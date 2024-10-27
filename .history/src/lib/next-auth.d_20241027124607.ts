// next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    email: string;
    challengesCompleted: number; // Add any additional properties you need
  }

  interface Session {
    user: User;
  }
}
