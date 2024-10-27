"use server";
import { signIn, signOut } from "@/lib/auth";
import prisma from "@/lib/db";
import { LogInSchema, SignUpSchema } from "@/lib/schemas";

import bcrypt from "bcryptjs";

// user actions
export const createUser = async (prevState: unknown, data: unknown) => {
  const dataObject = Object.fromEntries(data.entries());

  const validatedUserData = SignUpSchema.safeParse(dataObject);
  console.log(validatedUserData);
  if (!validatedUserData.success) {
    console.log("invalid form data");
    return {
      message: "Invalid form data",
    };
  }

  const hashedPassword = await bcrypt.hash(validatedUserData.data.password, 10);
  try {
    await prisma.user.create({
      data: {
        email: validatedUserData.data.email,
        hashedPassword,
      },
    });
  } catch (error) {
    return {
      message: "Could not create user",
    };
  }

  await signIn("credentials", validatedUserData.data);
};

export const logIn = async (formData: FormData) => {
  if (!(formData instanceof FormData)) {
    return {
      message: "Invalid form data",
    };
  }
  const authData = Object.fromEntries(formData.entries());
  const validatedAuthData = LogInSchema.safeParse(authData);
  console.log(validatedAuthData);
  if (!validatedAuthData.success) {
    return {
      message: "Invalid form data",
    };
  }
  await signIn("credentials", formData);
};

export const signOutUser = async () => {
  await signOut({ redirectTo: "/" });
};
