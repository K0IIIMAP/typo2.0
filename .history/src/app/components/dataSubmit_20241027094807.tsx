import React from "react";

export default function DataSubmit({ session, currentPath }) {
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
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
        ...data,
        challengesCompleted: challengesCompleted + 1,
      },
    });
  } else if (isChallenge && isNormalChallenge && challengesCompleted === 1) {
    await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        ...data,
        challengesCompleted: challengesCompleted + 1,
      },
    });
  } else if (isChallenge && isDifficultChallenge && challengesCompleted === 2) {
    await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        ...data,
        challengesCompleted: challengesCompleted + 1,
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
        ...data,
        challengesCompleted: challengesCompleted + 1,
      },
    });
  }
  return <div>DataSubmit</div>;
}
