"use server";
import { signIn, signOut } from "@/lib/auth";
import prisma from "@/lib/db";
import { LogInSchema, SignUpSchema } from "@/lib/schemas";
import { sleep } from "@/lib/utils";

import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export const createUser = async (prevState: unknown, data: FormData) => {
  const dataObject = Object.fromEntries(data.entries());
  const validatedUserData = SignUpSchema.safeParse(dataObject);

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

export const submitData = async (
  currentPath: string,
  progress: number,
  isChallenge: boolean,
  statsCpm: number
) => {
  const session = await auth();

  if (!session?.user?.email) return;

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
  const userCpm = user?.cpm;
  console.log(userCpm, statsCpm);
  const updatedCpm = userCpm === 0 ? statsCpm : (userCpm! + statsCpm) / 2;
  console.log(updatedCpm);
  await prisma.user.update({
    where: { email: session.user.email },
    data: {
      ...user,
      cpm: updatedCpm,
    },
  });
  if (!isChallenge || progress !== 100) return;

  const challengesCompleted = user?.challengesCompleted;

  const isEasyChallenge = currentPath.includes("easy");
  const isDifficultChallenge = currentPath.includes("difficult");
  const isNormalChallenge = currentPath.includes("normal");
  const isImpossibleChallenge = currentPath.includes("impossible");

  if (isChallenge && isEasyChallenge && challengesCompleted === 0) {
    await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        ...user,
        challengesCompleted: challengesCompleted + 1,
        cpm: updatedCpm,
      },
    });
  } else if (isChallenge && isNormalChallenge && challengesCompleted === 1) {
    await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        ...user,
        challengesCompleted: challengesCompleted + 1,
        cpm: updatedCpm,
      },
    });
  } else if (isChallenge && isDifficultChallenge && challengesCompleted === 2) {
    await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        ...user,
        challengesCompleted: challengesCompleted + 1,
        cpm: updatedCpm,
      },
    });
  } else if (
    isChallenge &&
    isImpossibleChallenge &&
    challengesCompleted === 3
  ) {
    await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        ...user,
        challengesCompleted: challengesCompleted + 1,
        cpm: updatedCpm,
      },
    });
  }
  revalidatePath("/challenges");
};
