"use server";
import { signIn, signOut } from "@/lib/auth";
import prisma from "@/lib/db";
import bcrypt from "bcryptjs";

// user actions
export const createUser = async (data) => {
  // check if form data is a proper type
  if (!(data instanceof FormData)) {
    return {
      message: "Invalid form data",
    };
  }
  const hashedPassword = await bcrypt.hash(data.password, 10);

  await prisma.user.create({
    data: {
      email: data.email,
      hashedPassword,
    },
  });

  await signIn("credentials", data);
};

export const logIn = async (formData: FormData) => {
  const authData = Object.fromEntries(formData.entries());

  await signIn("credentials", authData);
};

export const signOutUser = async () => {
  await signOut({ redirectTo: "/" });
};
