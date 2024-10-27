"use server";
import { signIn, signOut } from "@/lib/auth";
import prisma from "@/lib/db";
import { LogInSchema, SignUpSchema } from "@/lib/schemas";
import { sleep } from "@/lib/utils";

import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";

// user actions
export const createUser = async (prevState: unknown, data: unknown) => {
  console.log(data);
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
  await sleep(2000);
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

export const logIn = async (prevState: unknown, formData: FormData) => {
  if (!(formData instanceof FormData)) {
    return {
      message: "Invalid form data",
    };
  }
  await sleep(2000);
  const authData = Object.fromEntries(formData.entries());
  const validatedAuthData = LogInSchema.safeParse(authData);

  if (!validatedAuthData.success) {
    return {
      message: "Invalid form data",
    };
  }
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin": {
          return { message: "Invalid cretentials" };
        }
        default: {
          return {
            message: "Could not sign in",
          };
        }
      }
    }
    throw error; // next js redirects throws error, so we need to re throw it
  }
};

export const signOutUser = async () => {
  await sleep(2000);
  await signOut({ redirectTo: "/" });
};
